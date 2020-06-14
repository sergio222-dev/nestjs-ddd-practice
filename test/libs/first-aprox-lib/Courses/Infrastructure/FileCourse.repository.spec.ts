import CourseRepository
                              from '../../../../../libs/first-aprox-lib/Courses/Domain/Models/CourseRepository';
import {FileCourseRepository} from '../../../../../libs/first-aprox-lib/Courses/Infrastructure/FileCourse.repository';
import Course
                              from '../../../../../libs/first-aprox-lib/Courses/Domain/Models/Course';
import exp                    from 'constants';

describe('File Course Repository', () => {
  let repository: CourseRepository;
  let course: Course;

  beforeEach(()=> {
    repository = new FileCourseRepository();
    course = new Course('id', 'name', 'duration');
  })

  it('should save course', () => {
    repository.save(course);
  });

  it('should return an existing course', () => {
    expect(course).toEqual(repository.search('id'));
  })

  it('should return nothing in non existing course', () => {
    expect(repository.search('non-existing-id')).toBeNull();
  })
});