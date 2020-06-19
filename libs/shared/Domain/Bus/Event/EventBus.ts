import { DomainEvent } from "@libs/Shared/Domain/DomainEvent";

export interface EventBus {
  publishAll(events: DomainEvent[]): void;
}