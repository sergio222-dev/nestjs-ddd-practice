import { Provider }              from "@nestjs/common";
import { CourseCreatorService }  from "../../Courses/Application/Create/CourseCreator.service";
import { MikroCourseRepository } from "@libs/first-aprox-lib/Courses/Infrastructure/persistense/MikroCourseRepository";

export const providers: Provider[] = [
  CourseCreatorService,
  {
    provide: 'COURSE_REPOSITORY',
    useClass: MikroCourseRepository,
  }
];