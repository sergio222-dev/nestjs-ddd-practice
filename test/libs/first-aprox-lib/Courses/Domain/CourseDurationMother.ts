import { CourseDuration } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseDuration";
import { WordMother }     from "../../../Shared/Domain/WordMother";

export class CourseDurationMother {
  public static create(duration: string): CourseDuration {
    return new CourseDuration(duration);
  }

  public static random(): CourseDuration {
    return this.create(WordMother.random());
  }
}