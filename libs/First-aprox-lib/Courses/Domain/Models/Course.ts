import { AggregateRoot } from "@libs/Shared/Domain/AgreggateRoot";
import { CourseId }      from "./CourseId";
import { CourseName }         from "./CourseName";
import { CourseDuration }     from "./CourseDuration";
import { CourseCreatedEvent } from "../events/CourseCreated.event";

export class Course extends AggregateRoot {
  get id(): CourseId {
    return this._id;
  }

  get name(): CourseName {
    return this._name;
  }

  get duration(): CourseDuration {
    return this._duration;
  }

  constructor(
    private _id: CourseId,
    private _name: CourseName,
    private _duration: CourseDuration
  ) { super(); }

  public static create(
    id: CourseId,
    name: CourseName,
    duration: CourseDuration,
  ): Course {
    const course = new Course(id, name, duration);
    course.record(new CourseCreatedEvent(id.value, name.value, duration.value));

    return course;
  }
}