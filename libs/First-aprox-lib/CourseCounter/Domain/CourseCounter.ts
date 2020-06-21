import { AggregateRoot }      from "@libs/Shared/Domain/AgreggateRoot";
import { CourseId }           from "@libs/First-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseCounterId }    from "@libs/First-aprox-lib/CourseCounter/Domain/CourseCounterId";
import { CourseCounterTotal } from "@libs/First-aprox-lib/CourseCounter/Domain/CourseCounterTotal";
import { CourseCounterIncrementedDomainEvent } from "./CourseCounterIncrementedDomainEvent";

export class CourseCounter extends AggregateRoot {

  get existingCourse(): CourseId[] {
    return this._existingCourse;
  }

  get id(): CourseCounterId {
    return this._id;
  }

  get total(): CourseCounterTotal {
    return this._total;
  }

  constructor(
    private _id: CourseCounterId,
    private _total: CourseCounterTotal,
    private _existingCourse: CourseId[] = [],
  ) { super(); }

  public static initialize(id: CourseCounterId): CourseCounter {
    return new CourseCounter(id, CourseCounterTotal.initialize())
  }

  public hasIncremented(id: CourseId): boolean {
    return this._existingCourse.findIndex(c => c.equals(id)) !== -1;
  }

  public increment(id: CourseId): void {
    this._total = this._total.increment();
    this._existingCourse.push(id);

    const event = new CourseCounterIncrementedDomainEvent(this.id.value, this.total.value);
    this.record(event);
  }
}