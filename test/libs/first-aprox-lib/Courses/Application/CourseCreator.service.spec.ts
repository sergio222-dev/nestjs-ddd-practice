import {CourseCreatorService} from '@libs/first-aprox-lib/Courses/Application/CourseCreator.service';
import { mock }               from 'jest-mock-extended';
import CourseRepository
                             from '@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository';
import {CreateCourseRequest} from "@libs/first-aprox-lib/Courses/Application/CreateCourse.request";

describe('CourseCreator', () => {
  let courseCreatorTest: CourseCreatorService;
  let repository: CourseRepository;

  beforeEach(async () => {
    repository = mock<CourseRepository>();
    courseCreatorTest = new CourseCreatorService(repository);
  });

  describe('Create', () => {
    it('Shoud create a Course', () => {
      const id = 'some-id';
      const name = 'some-name';
      const duration = 'some-duration';

      const createCourseRequest = new CreateCourseRequest(id, name, duration);
      courseCreatorTest.create(createCourseRequest);
      expect(repository.save).toHaveBeenCalled();
    });
  })
})