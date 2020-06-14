import {v4 as uuid} from 'uuid';
import validator from 'uuid-validate';

export abstract class Uuid {
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
}