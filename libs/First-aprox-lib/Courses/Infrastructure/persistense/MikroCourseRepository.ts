import { Course }           from "@libs/First-aprox-lib/Courses/Domain/Models/Course";
import { CourseId }         from "@libs/First-aprox-lib/Courses/Domain/Models/CourseId";
import { CourseRepository } from "@libs/First-aprox-lib/Courses/Domain/Models/CourseRepository";
import { CourseMapper }     from "@libs/First-aprox-lib/Courses/Infrastructure/CourseMapper";
import { CourseEntity }     from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";
import { MikroRepository }  from "@libs/Shared/Infrastructure/Persistence/Mikro-ORM/MikroRepository";

export class MikroCourseRepository extends MikroRepository<CourseEntity>
  implements CourseRepository {

  async save(course: Course): Promise<void> {
    const entity = CourseMapper.toEntity(course);
    await this.em.persist(entity);
    await this.flush();
  }

  async search(id: CourseId): Promise<Course | null> {
    const entity = await this.em.findOne(CourseEntity, { id: id.value });
    return entity ?CourseMapper.fromEntity(entity) : null;
  }

  async delete(id: CourseId): Promise<void> {
    await this.em.remove(CourseEntity, { id: id.value });
    await this.flush();
  }

}