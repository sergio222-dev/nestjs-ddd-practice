import { DomainEvent } from "@libs/Shared/Domain/DomainEvent";

export class CourseCreatedEvent extends DomainEvent {
  get name(): string {
    return this._name;
  }

  get duration(): string {
    return this._duration;
  }
  public constructor(
    id: string,
    private readonly _name: string,
    private readonly _duration: string,
    eventId: string = null,
    occurredOn: string = null,
  ) {
    super(id, eventId, occurredOn);
  }

  public eventName(): string {
    return "course.created";
  }

  public fromPrimitive(
    id: string,
    body: [],
    eventId: string,
    occurredOn: string
  ): DomainEvent {
    return new CourseCreatedEvent(id, body['name'], body['duration'], eventId, occurredOn);
  }

  public toPrimitive(): Record<string, unknown> {
    return {
      name: this._name,
      duration: this._duration,
    };
  }

}