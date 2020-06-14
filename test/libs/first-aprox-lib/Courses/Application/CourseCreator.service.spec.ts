import { mock }                      from "jest-mock-extended";
import { CourseRepository }
                                     from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";
import { CourseCreatorService }      from "@libs/first-aprox-lib/Courses/Application/CourseCreator.service";
import { CreateCourseRequestMother } from "../Domain/CreateCourseRequestMother";

describe("CourseCreator", () => {
  let courseCreatorTest: CourseCreatorService;
  let repository: CourseRepository;

  beforeAll(async () => {
    repository = mock<CourseRepository>();
    courseCreatorTest = new CourseCreatorService(repository);
  });

  describe("Create", () => {
    it("Should create a Course", () => {
      const createCourseRequest = CreateCourseRequestMother.random();
      courseCreatorTest.create(createCourseRequest);
      expect(repository.save).toHaveBeenCalled();
    });
  });
});