import { Course }       from './Course';
import { CourseId } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";

export interface CourseRepository {
  save(course: Course): void;

  delete(id: CourseId): void;

  search(id: CourseId): Course | null;
}