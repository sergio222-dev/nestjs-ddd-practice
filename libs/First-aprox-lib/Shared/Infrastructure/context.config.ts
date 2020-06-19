import { Provider }              from "@nestjs/common";
import { CourseCreatorService }  from "../../Courses/Application/Create/CourseCreator.service";

export const providers: Provider[] = [
  CourseCreatorService
];