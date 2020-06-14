import { CourseId } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";

export default class Course {
  get id(): CourseId {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get duration(): string {
    return this._duration;
  }

  constructor(
    private _id: CourseId,
    private _name: string,
    private _duration: string
  ) {}
}