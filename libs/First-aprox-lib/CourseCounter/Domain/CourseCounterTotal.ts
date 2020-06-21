import { NumberValueObject } from "@libs/Shared/Domain/ValueObject/NumberValueObject";

export class CourseCounterTotal extends NumberValueObject {

  public static initialize(): CourseCounterTotal {
    return new CourseCounterTotal(0);
  }

  public increment(): CourseCounterTotal {
    return new CourseCounterTotal(this.value + 1);
  }

}