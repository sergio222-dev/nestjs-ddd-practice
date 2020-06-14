import Course       from './Course';
import { CourseId } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";

export default interface CourseRepository {
  save(course: Course): void;

  search(id: CourseId): Course | null;
}