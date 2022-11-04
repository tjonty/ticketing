import { Subjects, Publisher, OrderCancelledEvent } from "@tjtickets23/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
