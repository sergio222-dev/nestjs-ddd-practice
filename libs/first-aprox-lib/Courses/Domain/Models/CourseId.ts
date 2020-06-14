import { Uuid } from "@libs/shared/Domain/ValueObject/Uuid";

export class CourseId extends Uuid {
  constructor(value: string,) {
    super();
    this._value = value;
  }
}