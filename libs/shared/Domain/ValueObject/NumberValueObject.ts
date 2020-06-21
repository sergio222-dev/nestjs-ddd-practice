import { ValueObject } from "@libs/Shared/Domain/ValueObject/ValueObject";

export class NumberValueObject implements ValueObject<number> {
  get value(): number {
    return this._value;
  }

  constructor(private _value) {}
}