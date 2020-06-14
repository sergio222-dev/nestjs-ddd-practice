import { Module }            from '@nestjs/common';
import {CoursePutController} from './controller/Course/CoursePut.controller';
import { SharedModule }      from '@libs/shared';
import {FirstAproxLibModule} from "@libs/first-aprox-lib";

@Module({
  imports: [SharedModule, FirstAproxLibModule],
  controllers: [CoursePutController],
})
export class AppModule {}
