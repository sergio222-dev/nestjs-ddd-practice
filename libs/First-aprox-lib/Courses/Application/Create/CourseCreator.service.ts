import { Injectable }          from "@nestjs/common";
import { InjectRepository }    from "nestjs-mikro-orm";
import { CreateCourseRequest } from "../CreateCourse.request";
import { Course }              from "../../Domain/Models/Course";
import { CourseId }            from "../../Domain/Models/CourseId";
import { CourseName }     from "../../Domain/Models/CourseName";
import { CourseEntity }   from "../../Domain/Entities/Course.entity";
import { CourseDuration } from "../../Domain/Models/CourseDuration";
import { CourseRepository }    from "../../Domain/Models/CourseRepository";

@Injectable()
export class CourseCreatorService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: CourseRepository
  ) {}

  public create(createCourseRequest: CreateCourseRequest): void {
    const { id, duration, name } = createCourseRequest;
    const course = Course.create(
      new CourseId(id),
      new CourseName(name),
      new CourseDuration(duration)
    );

    this.courseRepository.save(course);
  }
}