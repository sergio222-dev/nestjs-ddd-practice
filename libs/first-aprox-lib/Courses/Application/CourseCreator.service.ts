import { Inject, Injectable }  from "@nestjs/common";
import Course                  from "../Domain/Models/Course";
import CourseRepository        from "../Domain/Models/CourseRepository";
import { CourseId }            from "../Domain/Models/CourseId";
import { CreateCourseRequest } from "./CreateCourse.request";
import { CourseName }          from "@libs/first-aprox-lib/Courses/Domain/Models/CourseName";
import { CourseDuration }      from "@libs/first-aprox-lib/Courses/Domain/Models/CourseDuration";

@Injectable()
export class CourseCreatorService {
  constructor(
    @Inject("CourseRepository")
    private courseRepository: CourseRepository
  ) {}

  public create(createCourseRequest: CreateCourseRequest): void {
    const { id, duration, name } = createCourseRequest;
    const course = new Course(
      new CourseId(id),
      new CourseName(name),
      new CourseDuration(duration),
    );

    this.courseRepository.save(course);
  }
}