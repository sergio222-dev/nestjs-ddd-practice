import { Module }     from '@nestjs/common';
import {CourseModule} from './Courses';

@Module({
  imports: [CourseModule],
  exports: [CourseModule],
})
export class FirstAproxLibModule {}