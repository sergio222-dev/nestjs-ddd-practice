import {Provider}             from '@nestjs/common';
import {FileCourseRepository} from './Infrastructure/FileCourse.repository';

export const providers: Provider[] = [
  {
    provide: 'CourseRepository',
    useClass: FileCourseRepository,
  }
];