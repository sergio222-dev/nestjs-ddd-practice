import CourseRepository from '../Domain/CourseRepository';
import Course           from '../Domain/Course';

export class CourseCreatorService {
  constructor(
    private courseRepository: CourseRepository,
  ) {}

  public create(id: string, name: string, duration: string) {
    const course = new Course(id, name, duration);

    this.courseRepository.save(course);
  }
}