import { Inject, Injectable }  from "@nestjs/common";
import Course                  from "../Domain/Models/Course";
import CourseRepository        from "../Domain/Models/CourseRepository";
import { CourseId }            from "../Domain/Models/CourseId";
import { CreateCourseRequest } from "./CreateCourse.request";

@Injectable()
export class CourseCreatorService {
  constructor(
    @Inject("CourseRepository")
    private courseRepository: CourseRepository
  ) {}

  public create(createCourseRequest: CreateCourseRequest): void {
    const { id, duration, name } = createCourseRequest;
    const course = new Course(new CourseId(id), name, duration);

    this.courseRepository.save(course);
  }
}