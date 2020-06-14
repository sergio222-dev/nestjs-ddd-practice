import {Response}                               from 'express';
import {Controller, Put, Param, Body, Res} from '@nestjs/common';

@Controller('/course')
export class CoursePutController {
  @Put(':id')
  updateCourse(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('duration') duration: string,
    @Res() res: Response,
  ): Response {
    return res.status(201).send(duration);
  }
}
