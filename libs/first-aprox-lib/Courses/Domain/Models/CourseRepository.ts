import { Course }   from "./Course";
import { CourseId } from "./CourseId";

export interface CourseRepository {
  save(course: Course): Promise<void>;

  delete(id: CourseId): Promise<void>;

  search(id: CourseId): Promise<Course | null>;
}