import { CourseCreatedEvent } from "@libs/First-aprox-lib/Courses/Domain/events/CourseCreated.event";
import { UuidMother }         from "../../../../Shared/Domain/UuidMother";
import { WordMother }         from "../../../../Shared/Domain/WordMother";
import { Course }             from "@libs/First-aprox-lib/Courses/Domain/Models/Course";

export class CourseCreatedEventMother {
  public static create(
    id: string,
    name: string,
    duration: string,
  ): CourseCreatedEvent {
    return new CourseCreatedEvent(id, name, duration);
  }

  public static fromCourse(course: Course): CourseCreatedEvent {
    const {id, name, duration} = course;
    return new CourseCreatedEvent(id.value, name.value, duration.value);
  }

  public static random(): CourseCreatedEvent {
    return new CourseCreatedEvent(UuidMother.random(), WordMother.random(), WordMother.random());
  }
}