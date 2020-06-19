import {Injectable}     from '@nestjs/common';
import * as fs          from 'fs';
import * as util            from 'util';
import { Course }           from '../../Domain/Models/Course';
import { CourseRepository } from '../../Domain/Models/CourseRepository';
import {CourseMapper} from '../CourseMapper';
import { CourseId }   from "@libs/First-aprox-lib/Courses/Domain/Models/CourseId";

@Injectable()
export class FileCourseRepository implements CourseRepository {
  private static FILE_PATH = __dirname + '/courses';

  async save(course: Course): Promise<void> {
    const serialized: string = CourseMapper.toString(course);
    const fileName = FileCourseRepository.fileName(course.id.value);
    fs.writeFileSync(fileName, serialized);
  }

  async search(id: CourseId): Promise<Course | null> {
    const fileName = FileCourseRepository.fileName(id.value);
    const options = {encoding: 'UTF-8'};
    return fs.existsSync(fileName) ?
      CourseMapper.fromString(fs.readFileSync(fileName, options)) :
      null;
  }

  async delete(id: CourseId): Promise<void> {
    const fileName = FileCourseRepository.fileName(id.value);
    fs.unlinkSync(fileName);
  }

  private static fileName(id: string): string {
    const {FILE_PATH} = FileCourseRepository;
    return util.format('%s.%s.repo', FILE_PATH, id);
  }

}