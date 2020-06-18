import { CreateCourseRequest } from "@libs/first-aprox-lib/Courses/Application/CreateCourse.request";
import { UuidMother }          from "../../../shared/Domain/UuidMother";
import { WordMother }          from "../../../shared/Domain/WordMother";

export class CreateCourseRequestMother {
  public static create(
    id: string,
    name: string,
    duration: string,
  ): CreateCourseRequest {
    return new CreateCourseRequest(id, name, duration);
  }

  public static random(): CreateCourseRequest {
    return this.create(
      UuidMother.random(),
      WordMother.random(),
      WordMother.random(),
    );
  }
}