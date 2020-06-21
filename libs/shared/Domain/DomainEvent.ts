import {v4 as uuid} from 'uuid';

export abstract class DomainEvent {
  get id(): string {
    return this._id;
  }

  get eventId(): string {
    return this._eventId;
  }

  get occurredOn(): string {
    return this._occurredOn;
  }
  protected constructor(
    private readonly _id: string,
    private readonly _eventId: string = uuid(),
    private readonly _occurredOn: string = Date.now().toString()
  ) {}

  abstract eventName(): string;
  abstract fromPrimitive(
    id: string,
    body: [],
    eventId: string,
    occurredOn: string,
  ): DomainEvent;
  abstract toPrimitive(): Record<string, unknown>;
}