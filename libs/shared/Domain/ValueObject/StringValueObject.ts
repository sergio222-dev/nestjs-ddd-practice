export class StringValueObject {
  get value(): string {
    return this._value;
  }
  constructor(
    private _value: string,
  ) {}
}