import { ConfigService }                          from "@nestjs/config";
import { MikroOrmModuleOptions }                  from "nestjs-mikro-orm";
import { Configuration, ReflectMetadataProvider } from "mikro-orm";

export const mikroOrmConfigurator = async (
  configService: ConfigService): Promise<MikroOrmModuleOptions> => ({
  type: configService.get<keyof typeof Configuration.PLATFORMS>(
    "MIKRO_ORM_DRIVER"),
  dbName: configService.get<string>("MIKRO_ORM_DB_NAME"),
  host: configService.get<string>("MIKRO_ORM_HOST"),
  user: configService.get<string>("MIKRO_ORM_USER"),
  password: configService.get<string>("MIKRO_ORM_PASS"),
  port: parseInt(configService.get<string>("MIKRO_ORM_PORT")),
  discovery: {
    requireEntitiesArray: true
  },
  metadataProvider: ReflectMetadataProvider,
  // entities: [],
  logger: (): void => {return;}
});