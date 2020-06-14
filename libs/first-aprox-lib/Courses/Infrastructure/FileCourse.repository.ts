import {Injectable}     from '@nestjs/common';
import * as fs          from 'fs';
import * as util        from 'util';
import Course           from '../Domain/Models/Course';
import CourseRepository from '../Domain/Models/CourseRepository';
import {CourseMapper}   from '../Domain/Models/CourseMapper';
import { CourseId }     from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";

@Injectable()
export class FileCourseRepository implements CourseRepository {
  private static FILE_PATH = __dirname + '/courses';

  save(course: Course): void {
    const serialized: string = CourseMapper.toString(course);
    const fileName = FileCourseRepository.fileName(course.id.value);
    fs.writeFileSync(fileName, serialized);
  }

  search(id: CourseId): Course | null {
    const fileName = FileCourseRepository.fileName(id.value);
    const options = {encoding: 'UTF-8'};
    return fs.existsSync(fileName) ?
      CourseMapper.fromString(fs.readFileSync(fileName, options)) :
      null;
  }

  private static fileName(id: string): string {
    const {FILE_PATH} = FileCourseRepository;
    return util.format('%s.%s.repo', FILE_PATH, id);
  }

}