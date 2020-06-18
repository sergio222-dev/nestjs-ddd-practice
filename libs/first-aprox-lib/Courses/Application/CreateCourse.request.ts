export class CreateCourseRequest {
  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get duration(): string {
    return this._duration;
  }

  constructor(
    private _id: string,
    private _name: string,
    private _duration: string,
  ) {}
}