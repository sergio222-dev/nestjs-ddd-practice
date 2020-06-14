import {Provider}               from '@nestjs/common';
import {FileCourseRepository}   from './Infrastructure/FileCourse.repository';
import { CourseCreatorService } from "./Application/CourseCreator.service";

export const providers: Provider[] = [
  CourseCreatorService,
  {
    provide: 'CourseRepository',
    useClass: FileCourseRepository,
  },
];