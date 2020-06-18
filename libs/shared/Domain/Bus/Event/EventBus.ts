import { DomainEvent } from "@libs/shared/Domain/DomainEvent";

export interface EventBus {
  publishAll(events: DomainEvent[]): void;
}