import {  TestingModule } from "@nestjs/testing";
import { initializeDb }   from "@libs/Shared/Infrastructure/Persistence/Mikro-ORM/create-schema.mikro";
import { ConfigService }  from "@nestjs/config";
import { CourseEntity }   from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";

export class ModuleInfrastructureTestCase {
  protected static module: TestingModule;
  static async before(configService: ConfigService): Promise<void> {
    await initializeDb({
      type: configService.get("FIRST_APROX_MIKRO_ORM_TYPE"),
      dbName: configService.get("FIRST_APROX_MIKRO_ORM_DBNAME"),
      entities: [CourseEntity],
      discovery: {
        requireEntitiesArray: true
      }
    });
  }
}