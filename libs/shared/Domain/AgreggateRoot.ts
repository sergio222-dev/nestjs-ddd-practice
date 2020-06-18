import { DomainEvent } from "./DomainEvent";

export abstract class AggregateRoot {
  private events: DomainEvent[] = [];

  public record(event: DomainEvent): void {
    this.events.push(event);
  }

  public pull(): DomainEvent[] {
    const events = this.events;
    this.events = [];
    return events;
  }
}
