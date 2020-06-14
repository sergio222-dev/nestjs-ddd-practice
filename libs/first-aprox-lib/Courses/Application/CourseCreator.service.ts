import CourseRepository from '../Domain/Models/CourseRepository';
import Course           from '../Domain/Models/Course';

export class CourseCreatorService {
  constructor(
    private courseRepository: CourseRepository,
  ) {}

  public create(id: string, name: string, duration: string) {
    const course = new Course(id, name, duration);

    this.courseRepository.save(course);
  }
}