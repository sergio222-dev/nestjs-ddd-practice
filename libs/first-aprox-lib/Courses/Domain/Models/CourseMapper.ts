import { Course }             from './Course';
import { CourseId }       from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseName }     from "@libs/first-aprox-lib/Courses/Domain/Models/CourseName";
import { CourseDuration } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseDuration";

export class CourseMapper {

  public static fromString(courseString: string): Course {
    const courseRaw = JSON.parse(courseString);
    const {_id, _name, _duration} = courseRaw;
    return new Course(
      new CourseId(_id._value),
      new CourseName(_name._value),
      new CourseDuration(_duration._value),
    );
  }

  public static toString(course: Course): string {
    return JSON.stringify(course);
  }
}