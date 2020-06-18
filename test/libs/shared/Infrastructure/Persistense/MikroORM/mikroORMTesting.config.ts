import { ReflectMetadataProvider } from "mikro-orm";
import { CourseEntity }            from "@libs/first-aprox-lib/Courses/Domain/Entities/Course.entity";

export const mikroORMTestingConfig = {
  type: "sqlite",
  dbName: "./test/data/TestDb",
  metadataProvider: ReflectMetadataProvider,
  entities: [CourseEntity],
  discovery: {
    requireEntitiesArray: true
  }
}