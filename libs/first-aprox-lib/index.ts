import { Module }     from '@nestjs/common';
import {CourseModule} from './Courses';

@Module({
  imports: [CourseModule]
})
export class FirstAproxLibModule {}