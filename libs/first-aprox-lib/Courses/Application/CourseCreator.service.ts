import CourseRepository      from '../Domain/Models/CourseRepository';
import Course                from '../Domain/Models/Course';
import {CreateCourseRequest} from './CreateCourse.request';

export class CourseCreatorService {
  constructor(
    private courseRepository: CourseRepository,
  ) {}

  public create(createCourseRequest: CreateCourseRequest) {
    const {id, duration, name} = createCourseRequest;
    const course = new Course(id, name, duration);

    this.courseRepository.save(course);
  }
}