import { mock }                      from "jest-mock-extended";
import { Course }                    from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import { CourseMother }              from "../Domain/CourseMother";
import { CourseRepository }
                                     from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";
import { CreateCourseRequest }       from "@libs/first-aprox-lib/Courses/Application/CreateCourse.request";
import { CourseCreatorService }      from "@libs/first-aprox-lib/Courses/Application/CourseCreator.service";
import { CreateCourseRequestMother } from "../Domain/CreateCourseRequestMother";

describe("CourseCreator", () => {
  let courseCreatorTest: CourseCreatorService;
  let repository: CourseRepository;
  let createCourseRequest: CreateCourseRequest;
  let course: Course;

  beforeAll(async () => {
    repository = mock<CourseRepository>();
    courseCreatorTest = new CourseCreatorService(repository);
    createCourseRequest = CreateCourseRequestMother.random();
    course = CourseMother.fromRequest(createCourseRequest);
  });

  describe("Create", () => {
    it("Should create a Course", () => {
      courseCreatorTest.create(createCourseRequest);
      expect(repository.save).toHaveBeenCalledWith(course);
    });
  });
});