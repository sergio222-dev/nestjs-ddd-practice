import { CourseId }       from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseName }     from "@libs/first-aprox-lib/Courses/Domain/Models/CourseName";
import { CourseDuration } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseDuration";

export default class Course {
  get id(): CourseId {
    return this._id;
  }

  get name(): CourseName {
    return this._name;
  }

  get duration(): CourseDuration {
    return this._duration;
  }

  constructor(
    private _id: CourseId,
    private _name: CourseName,
    private _duration: CourseDuration
  ) {}
}