import {Module}               from '@nestjs/common';
import {providers}            from './config';

@Module({
  providers,
  exports: providers,
})
export class CourseModule {

}