import { Logger }                           from "@nestjs/common";
import { Options, ReflectMetadataProvider } from "mikro-orm";
import { CourseEntity }                     from "../../../../Courses/Domain/Entities/Course.entity";

const logger = new Logger("MikroORM");
const config: Options = {
  metadataProvider: ReflectMetadataProvider,
  discovery: {
    requireEntitiesArray: true,
  },
  entities: [CourseEntity],
  dbName: "first-aprox",
  type: "mysql",
  user: 'root',
  password: 'admin',
  host: 'localhost',
  port: 3306,
  debug: true,
  logger: logger.log.bind(logger),
};

export default config;