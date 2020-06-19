import { MikroOrmModuleOptions }   from "nestjs-mikro-orm";
import { ReflectMetadataProvider } from "mikro-orm";
import { SettingScope }            from "@libs/Shared/Infrastructure/LoaderWithEnv";

export default new SettingScope<MikroOrmModuleOptions>("MIKRO",
  envSettings => ({
    port: envSettings.MIKRO_ORM_PORT,
    host: envSettings.MIKRO_ORM_HOST,
    dbName: envSettings.MIKRO_ORM_DB_NAME,
    driver: envSettings.MIKRO_ORM_DRIVER,
    user: envSettings.MIKRO_ORM_USER,
    password: envSettings.MIRKO_ORM_PASS,
    discovery: {
      requireEntitiesArray: true
    },
    metadataProvider: ReflectMetadataProvider,
    logger: (): void => {return;}
  }));