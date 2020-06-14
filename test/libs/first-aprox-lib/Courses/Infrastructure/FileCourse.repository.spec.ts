import Course                   from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import CourseRepository
                                from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";
import { CourseId }             from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseName }           from "@libs/first-aprox-lib/Courses/Domain/Models/CourseName";
import { CourseDuration }       from "@libs/first-aprox-lib/Courses/Domain/Models/CourseDuration";
import { FileCourseRepository } from "@libs/first-aprox-lib/Courses/Infrastructure/FileCourse.repository";

describe("File Course Repository", () => {
  let repository: CourseRepository;
  let course: Course;
  let id: CourseId;
  let name: CourseName;
  let duration: CourseDuration;

  beforeEach(() => {
    id = new CourseId("id");
    name = new CourseName("name");
    duration = new CourseDuration("duration");
    repository = new FileCourseRepository();
    course = new Course(id, name, duration);
  });

  it("should save course", () => {
    repository.save(course);
  });

  it("should return an existing course", () => {
    expect(repository.search(id)).toEqual(course);
  });

  it("should return nothing in non existing course", () => {
    expect(repository.search(new CourseId("non-existing-id"))).toBeNull();
  });
});