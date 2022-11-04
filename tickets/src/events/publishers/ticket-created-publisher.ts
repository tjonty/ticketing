import { Publisher, Subjects, TicketCreatedEvent } from "@tjtickets23/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
