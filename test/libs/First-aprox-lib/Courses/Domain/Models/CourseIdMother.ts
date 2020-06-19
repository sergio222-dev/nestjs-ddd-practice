import { CourseId }   from "@libs/First-aprox-lib/Courses/Domain/Models/CourseId";
import { UuidMother } from "../../../../Shared/Domain/UuidMother";

export class CourseIdMother {
  public static create(id: string): CourseId {
    return new CourseId(id);
  }

  public static random(): CourseId {
    return this.create(UuidMother.random());
  }
}