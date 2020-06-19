import { SettingScope }            from "@libs/Shared/Infrastructure/LoaderWithEnv";
import { CourseEntity }            from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";
import { ReflectMetadataProvider } from "mikro-orm";
import { MikroOrmModuleOptions }   from "nestjs-mikro-orm";

export const Mikro = new SettingScope<MikroOrmModuleOptions>("Mikro",
  envSettings => ({
    port: parseInt(envSettings.MIKRO_ORM_PORT),
    host: envSettings.MIKRO_ORM_HOST,
    type: envSettings.MIKRO_ORM_DRIVER,
    dbName: envSettings.MIKRO_ORM_DB_NAME,
    user: envSettings.MIKRO_ORM_USER,
    password: envSettings.MIKRO_ORM_PASS,
    discovery: {
      requireEntitiesArray: true
    },
    metadataProvider: ReflectMetadataProvider,
    logger: (): void => {return;},
    entities: [CourseEntity]
  }));