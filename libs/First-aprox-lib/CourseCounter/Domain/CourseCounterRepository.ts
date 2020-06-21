import { CourseCounter }   from "@libs/First-aprox-lib/CourseCounter/Domain/CourseCounter";

export interface CourseCounterRepository {
  save(courseCounter: CourseCounter): void;
  search(): CourseCounter | null;
}