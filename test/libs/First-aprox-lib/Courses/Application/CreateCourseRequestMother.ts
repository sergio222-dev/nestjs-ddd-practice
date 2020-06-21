import { CreateCourseRequest } from "@libs/First-aprox-lib/Courses/Application/CreateCourse.request";
import { UuidMother }          from "../../../Shared/Domain/UuidMother";
import { WordMother }          from "../../../Shared/Domain/WordMother";

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