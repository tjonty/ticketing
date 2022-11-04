import { Publisher, Subjects, TicketUpdatedEvent } from "@tjtickets23/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
