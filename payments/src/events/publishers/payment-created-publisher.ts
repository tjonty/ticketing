import { PaymentCreatedEvent, Publisher, Subjects } from "@tjtickets23/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
