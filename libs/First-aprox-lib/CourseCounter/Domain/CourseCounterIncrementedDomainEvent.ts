import { CourseCounterId } from "./CourseCounterId";
import { CourseCounterTotal } from "./CourseCounterTotal";

export class CourseCounterIncrementedDomainEvent {
    constructor(
        private _aggregateId: string, 
        private _total: string,
    ) {}
}