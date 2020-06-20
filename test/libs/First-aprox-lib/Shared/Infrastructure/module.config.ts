import { SettingScope }          from "@libs/Shared/Infrastructure/Loader";
import { MikroOrmModuleOptions } from "nestjs-mikro-orm";
import { Configuration }         from "mikro-orm";
import { CourseEntity }          from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";

export const MikroTest = new SettingScope<MikroOrmModuleOptions>('mikro', envSettings => ({
  type: envSettings.MIKRO_ORM_TYPE as keyof typeof Configuration.PLATFORMS,
  dbName: envSettings.MIKRO_ORM_DBNAME,
  entities: [CourseEntity],
  discovery: {
    requireEntitiesArray: true
  }
}))

export const MikroEntities = new SettingScope('entities', () => ({
  entities: [CourseEntity],
}))