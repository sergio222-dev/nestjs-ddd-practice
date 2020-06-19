import { Module }            from '@nestjs/common';
import {CoursePutController} from './controller/Course/CoursePut.controller';
import { SharedModule }      from '@libs/Shared';
import {FirstAproxLibModule} from "@libs/First-aprox-lib";

@Module({
  imports: [SharedModule, FirstAproxLibModule],
  controllers: [CoursePutController],
})
export class AppModule {}
