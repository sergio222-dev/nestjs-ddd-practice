import { Provider }             from "@nestjs/common";
import { CourseCreatorService } from "@libs/first-aprox-lib/Courses/Application/CourseCreator.service";
import { FileCourseRepository } from "@libs/first-aprox-lib/Courses/Infrastructure/persistense/FileCourse.repository";

export const providers: Provider[] = [
  CourseCreatorService,
  {
    provide: 'CourseRepository',
    useClass: FileCourseRepository,
  },
]