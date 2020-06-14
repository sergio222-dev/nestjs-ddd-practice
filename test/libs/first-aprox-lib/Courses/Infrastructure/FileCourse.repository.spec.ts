import { Course }               from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import { CourseId }             from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseMother }         from "../Domain/CourseMother";
import { CourseRepository }
                                from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";
import { FileCourseRepository } from "@libs/first-aprox-lib/Courses/Infrastructure/FileCourse.repository";

describe("File Course Repository", () => {
  let repository: CourseRepository;
  let course: Course;

  beforeAll(() => {
    repository = new FileCourseRepository();
    course = CourseMother.random();
  });

  it("should save course", () => {
    repository.save(course);
  });

  it("should return an existing course", () => {
    expect(repository.search(course.id)).toEqual(course);
  });

  it("should return nothing in non existing course", () => {
    expect(repository.search(new CourseId("non-existing-id"))).toBeNull();
  });

  it("should delete an existing course", () => {
    expect(() => repository.delete(course.id)).not.toThrowError();
  })
});
