import { Configuration, Options, ReflectMetadataProvider } from "mikro-orm";
import { CourseEntity }                                    from "../../../../Courses/Domain/Entities/Course.entity";

const config: Options = {
  metadataProvider: ReflectMetadataProvider,
  discovery: {
    requireEntitiesArray: true,
  },
  entities: [CourseEntity],
  dbName: process.env.DB_NAME,
  type: process.env['ORM_DRIVER'] as keyof typeof Configuration.PLATFORMS,
  user: process.env['MYSQL_USER'],
  password: process.env['MYSQL_PASS'],
  host: process.env['DB_HOST'],
  port: parseInt(process.env['PORT']),
  debug: true,
  logger: () => '',
};

export default config;