import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@tjtickets23/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
