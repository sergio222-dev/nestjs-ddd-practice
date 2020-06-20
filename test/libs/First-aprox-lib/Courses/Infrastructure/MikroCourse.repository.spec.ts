import { suite, test }                        from "@testdeck/jest";
import { CourseRepository }                   from "@libs/First-aprox-lib/Courses/Domain/Models/CourseRepository";
import { CourseModuleInfrastructureTestCase } from "../CourseModuleInfrastructureTestCase";
import { CourseEntity }                       from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";
import { MikroCourseRepository }              from "@libs/First-aprox-lib/Courses/Infrastructure/persistense/MikroCourseRepository";
import { CourseMother }                       from "../Domain/Models/CourseMother";

@suite()
export class CourseRepositoryTestCase
  extends CourseModuleInfrastructureTestCase {

  @test()
  async it_should_save_a_course(): Promise<void> {
    const course = CourseMother.random();
    const repository = this.repository;
    await repository.save(course);
  }

  @test()
  async it_should_return_an_existent_course(): Promise<void> {
    const {repository} = this;
    const course = CourseMother.random();
    await repository.save(course);
    const returnedCourse = await repository.search(course.id);
    expect(returnedCourse).toStrictEqual(course);
  }

  @test()
  async it_should_delete_an_existent_course(): Promise<void> {
    const {repository} = this;
    const course = CourseMother.random();
    await repository.save(course);
    await repository.delete(course.id);
  }

  @test()
  async it_should_return_null_on_non_existent_course(): Promise<void> {
    const {repository} = this;
    const course = CourseMother.random();
    const nonExistentCourse = await repository.search(course.id);
    expect(nonExistentCourse).toBe(null);
  }
}