import Course from './Course';

export default interface CourseRepository {
  save(course: Course): void;
}