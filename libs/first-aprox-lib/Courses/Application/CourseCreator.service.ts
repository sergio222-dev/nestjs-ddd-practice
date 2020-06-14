import CourseRepository      from '../Domain/Models/CourseRepository';
import Course                from '../Domain/Models/Course';
import {CreateCourseRequest}  from './CreateCourse.request';
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CourseCreatorService {
  constructor(
    @Inject('CourseRepository')
    private courseRepository: CourseRepository,
  ) {}

  public create(createCourseRequest: CreateCourseRequest): void {
    const {id, duration, name} = createCourseRequest;
    const course = new Course(id, name, duration);

    this.courseRepository.save(course);
  }
}