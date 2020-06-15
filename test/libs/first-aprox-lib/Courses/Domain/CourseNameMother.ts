import { CourseName } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseName";
import { WordMother } from "../../../Shared/Domain/WordMother";

export class CourseNameMother {
  public static create(name: string): CourseName {
    return new CourseName(name);
  }

  public static random(): CourseName {
    return this.create(WordMother.random());
  }
}