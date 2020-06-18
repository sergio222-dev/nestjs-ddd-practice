import { CourseRepository } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";
import { UnitTestCase }     from "../../shared/Infrastructure/UnitTestCase";
import { Course }           from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import { CourseId }         from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";

export class CourseModuleUnitTestCase extends UnitTestCase{
  private _repository: CourseRepository;

  get repository(): CourseRepository {
    if(!this._repository) this._repository = this.mock<CourseRepository>();
    return this._repository;
  }

  protected shouldSave(course: Course): void {
    expect(this.repository.save).toBeCalledWith(course);
    expect(this.repository.save).toBeCalledTimes(1);
  }

  protected shouldSearch(id: CourseId): void {
    expect(this.repository.search).toBeCalledWith(id);
  }
}