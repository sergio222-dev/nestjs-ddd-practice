import { FirstAproxModuleInfrastructureTestCase } from "../FirstAproxModuleInfrastructureTestCase";
import { CourseRepository }                       from "@libs/First-aprox-lib/Courses/Domain/Models/CourseRepository";
import { MikroCourseRepository }                  from "@libs/First-aprox-lib/Courses/Infrastructure/persistense/MikroCourseRepository";
import { CourseEntity }                           from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";


export class CourseModuleInfrastructureTestCase
  extends FirstAproxModuleInfrastructureTestCase {
  private _repository: CourseRepository;

  get repository(): CourseRepository {
    if (!this._repository) {
      this._repository = CourseModuleInfrastructureTestCase
        .repository<CourseRepository>(MikroCourseRepository, CourseEntity);
    }
    return this._repository;
  }
}