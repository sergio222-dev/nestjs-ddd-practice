import { CourseId }             from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseName }           from "@libs/first-aprox-lib/Courses/Domain/Models/CourseName";
import { CourseDuration }       from "@libs/first-aprox-lib/Courses/Domain/Models/CourseDuration";
import { Course }
                                from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import { CreateCourseRequest }  from "@libs/first-aprox-lib/Courses/Application/CreateCourse.request";
import { CourseIdMother }       from "./CourseIdMother";
import { CourseNameMother }     from "./CourseNameMother";
import { CourseDurationMother } from "./CourseDurationMother";

export class CourseMother {
  public static create(
    id: CourseId, name: CourseName, duration: CourseDuration): Course {
    return new Course(id, name, duration);
  }

  public static fromRequest(request: CreateCourseRequest): Course {
    return this.create(
      CourseIdMother.create(request.id),
      CourseNameMother.create(request.name),
      CourseDurationMother.create(request.duration)
    );
  }

  public static random(): Course {
    return this.create(
      CourseIdMother.random(),
      CourseNameMother.random(),
      CourseDurationMother.random()
    );
  }
}