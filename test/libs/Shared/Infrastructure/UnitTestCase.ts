import { mock, MockProxy } from "jest-mock-extended";
import { EventBus }        from "@libs/Shared/Domain/Bus/Event/EventBus";
import { DomainEvent }     from "@libs/Shared/Domain/DomainEvent";

export abstract class UnitTestCase {

  private _eventBus: EventBus;

  get eventBus(): EventBus {
    if(!this._eventBus) this._eventBus = this.mock<EventBus>();
    return this._eventBus;
  }

  protected mock<T>(): MockProxy<T> & T {
    return mock<T>();
  }

  protected shouldPublishedDomainEvent(events: DomainEvent[]): void {
    expect(this.eventBus.publishAll).toHaveBeenCalledWith(events);
  }

  protected shouldNotPublishedDomainEvent(events: DomainEvent[]): void {
    expect(this.eventBus.publishAll).not.toHaveBeenCalledWith(events);
  }
}