import { Publisher, OrderCreatedEvent, Subjects } from "@tjtickets23/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
