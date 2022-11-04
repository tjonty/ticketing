import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from "@tjtickets23/common";
import express, { Request, Response } from "express";
import { OrderCancelledPublisher } from "../events/publishers/order-cancelled-publisher";
import { Order, OrderStatus } from "../models/order";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.delete(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId).populate("ticket");

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    // publishing an event saying this was cancelled!
    new OrderCancelledPublisher(natsWrapper.client).publish({
      id: order.id,
      version: order.version,
      ticket: {
        id: order.ticket.id,
      },
    });
    OrderCancelledPublisher;

    res.status(204).send(order);
  }
);

export { router as deleteOrderRouter };
