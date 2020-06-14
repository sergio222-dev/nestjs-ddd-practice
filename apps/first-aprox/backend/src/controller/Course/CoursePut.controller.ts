import {Response}                                    from 'express';
import { Controller, Put, Param, Body, Res, Inject } from '@nestjs/common';
import { CourseCreatorService }                      from "@libs/first-aprox-lib/Courses/Application/CourseCreator.service";
import { CreateCourseRequest }                       from "@libs/first-aprox-lib/Courses/Application/CreateCourse.request";

@Controller('/course')
export class CoursePutController {

  constructor(private courseCreator: CourseCreatorService) {}

  @Put(':id')
  updateCourse(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('duration') duration: string,
    @Res() res: Response,
  ): Response {
    const request = new CreateCourseRequest('end-id', 'end-name', 'end-duration');
    this.courseCreator.create(request);
    return res.status(201).send(duration);
  }
}
