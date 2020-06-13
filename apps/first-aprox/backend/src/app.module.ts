import { Module }                  from '@nestjs/common';
import {CoursePutController}       from './controller/Course/CoursePut.controller';
import { HealtCheckGetController } from './controller/HealtCheck/HealtCheckGet.controller';
import { SharedModule }            from '@libs/shared';

@Module({
  imports: [SharedModule],
  controllers: [HealtCheckGetController, CoursePutController],
})
export class AppModule {}
