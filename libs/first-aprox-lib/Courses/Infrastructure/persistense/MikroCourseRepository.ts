import { Course }           from "@libs/first-aprox-lib/Courses/Domain/Models/Course";
import { CourseId }         from "@libs/first-aprox-lib/Courses/Domain/Models/CourseId";
import { Repository }       from "mikro-orm";
import { CourseMapper }     from "@libs/first-aprox-lib/Courses/Domain/Models/CourseMapper";
import { CourseEntity }     from "@libs/first-aprox-lib/Courses/Domain/Entity/CourseEntity";
import { MikroRepository }  from "@libs/shared/Infrastructure/Persistence/Mikro-ORM/MikroRepository";
import { CourseRepository } from "@libs/first-aprox-lib/Courses/Domain/Models/CourseRepository";

@Repository(CourseEntity)
export class MikroCourseRepository extends MikroRepository<CourseEntity>
  implements CourseRepository {

  async save(course: Course): Promise<void> {
    const entity = CourseMapper.toEntity(course);
    await this.em.persist(entity);
    await this.flush();
  }

  async search(id: CourseId): Promise<Course | null> {
    const entity = await this.em.findOne(CourseEntity, { id: id.value });
    return entity ? CourseMapper.fromEntity(entity) : null;
  }

  async delete(id: CourseId): Promise<void> {
    await this.em.remove(CourseEntity, { id: id.value });
    await this.flush();
  }

}