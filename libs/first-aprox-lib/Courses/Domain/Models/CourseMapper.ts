import Course      from './Course';
import {CourseDTO} from './CourseDTO';
import {Raw}       from '@libs/shared/Domain/Raw';

export class CourseMapper {
  public static fromDTO(course: CourseDTO): Course {
    const {id, name, duration} = course;
    return new Course(id, name, duration);
  }

  public static fromString(courseString: string): Course {
    const courseRaw = JSON.parse(courseString);
    const {_id, _name, _duration} = courseRaw;
    return new Course(_id, _name, _duration);
  }

  public static toDTO(course: Course): CourseDTO {
    const {id, duration, name} = course;
    return new Course(id, name, duration);
  }

  public static toString(course: Course): string {
    return JSON.stringify(course);
  }
}