import { Entity, PrimaryKey, Property } from "mikro-orm";
import { MikroCourseRepository }        from "@libs/First-aprox-lib/Courses/Infrastructure/persistense/MikroCourseRepository";

@Entity({
  tableName: 'course',
  customRepository: () => MikroCourseRepository,
})
export class CourseEntity {

  @PrimaryKey()
  id!: string;

  @Property()
  name: string;

  @Property()
  duration: string;

  constructor(id: string, name: string, duration: string) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
}
