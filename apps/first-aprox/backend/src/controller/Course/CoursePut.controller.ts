import {Controller, Put, Param, HttpCode} from '@nestjs/common';

@Controller('/course')
export class CoursePutController {
  @Put(':id')
  @HttpCode(201)
  updateCourse(@Param('id') id: string): string {
    return '';
  }
}
