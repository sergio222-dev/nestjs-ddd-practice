import { BaseEntity }                   from "@libs/shared/Domain/Entity/BaseEntity";
import { Entity, PrimaryKey, Property } from "mikro-orm";

@Entity({
  tableName: 'course',
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