import { suite, test }               from "@testdeck/jest";
import { CourseCreatorService }      from "@libs/First-aprox-lib/Courses/Application/Create/CourseCreator.service";
import { CreateCourseRequestMother } from "./CreateCourseRequestMother";
import { CourseModuleUnitTestCase }  from "../CourseUnitTestCase";
import { CourseMother }              from "../Domain/Models/CourseMother";
import { CourseCreatedEventMother }  from "../Domain/Events/CourseCreatedEventMother";

@suite('Course Creator Service Test')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CourseCreatorServiceTestCase extends CourseModuleUnitTestCase {

  private _courseCreator: CourseCreatorService;

  get courseCreator(): CourseCreatorService {
    if (!this._courseCreator) {
      this._courseCreator =
        new CourseCreatorService(this.repository);
    }
    return this._courseCreator;
  }

  @test()
  it_should_create_course(): void {
    const request = CreateCourseRequestMother.random();
    const course = CourseMother.fromRequest(request);
    const domainEvent = CourseCreatedEventMother.fromCourse(course);
    course.record(domainEvent);
    this.courseCreator.create(request);
    this.shouldSave(course);
    // this.shouldPublishedDomainEvent([domainEvent]);
  }
}