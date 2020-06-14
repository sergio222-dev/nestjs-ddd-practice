import Course       from './Course';
import {CourseDTO}  from './CourseDTO';
import {Raw}        from '@libs/shared/Domain/Raw';
import { CourseId } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";

export class CourseMapper {
  public static fromDTO(course: CourseDTO): Course {
    const {id, name, duration} = course;
    return new Course(new CourseId(id), name, duration);
  }

  public static fromString(courseString: string): Course {
    const courseRaw = JSON.parse(courseString);
    const {_id, _name, _duration} = courseRaw;
    return new Course(new CourseId(_id._value), _name, _duration);
  }

  public static toDTO(course: Course): CourseDTO {
    const {id, duration, name} = course;
    return new CourseDTO(id.value, name, duration);
  }

  public static toString(course: Course): string {
    return JSON.stringify(course);
  }
}