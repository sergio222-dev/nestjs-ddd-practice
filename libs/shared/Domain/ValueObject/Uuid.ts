import {v4 as uuid}    from 'uuid';
import validator       from 'uuid-validate';
import { ValueObject } from "@libs/Shared/Domain/ValueObject/ValueObject";

export abstract class Uuid implements ValueObject<string> {
  protected _value: string;

  get value(): string {
    return this._value;
  }

  public static random(): string {
    return uuid();
  }

  public isValid(id: Uuid): boolean {
    return validator(id.value);
  }

  public equals(id: Uuid): boolean {
    return id.value === this._value;
  }
}