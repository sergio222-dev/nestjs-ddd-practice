import { CourseEntity } from "../Domain/Entities/Course.entity";
import { Course }       from '../Domain/Models/Course';
import { CourseId }       from "../Domain/Models/CourseId";
import { CourseName }     from "../Domain/Models/CourseName";
import { CourseDuration } from "../Domain/Models/CourseDuration";

export class CourseMapper {

  public static fromEntity(course: CourseEntity): Course {
    return new Course(
      new CourseId(course.id),
      new CourseName(course.name),
      new CourseDuration(course.duration),
    )
  }

  public static fromString(courseString: string): Course {
    const courseRaw = JSON.parse(courseString);
    const {_id, _name, _duration} = courseRaw;
    return new Course(
      new CourseId(_id._value),
      new CourseName(_name._value),
      new CourseDuration(_duration._value),
    );
  }

  public static toEntity(course: Course): CourseEntity {
    return new CourseEntity(
      course.id.value,
      course.name.value,
      course.duration.value,
    )
  }

  public static toString(course: Course): string {
    return JSON.stringify(course);
  }
}