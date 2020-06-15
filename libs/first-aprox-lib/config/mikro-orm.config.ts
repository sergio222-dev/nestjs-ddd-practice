import { Logger }       from "@nestjs/common";
import { Options }      from "mikro-orm";
import { BaseEntity }   from "@libs/shared/Domain/Entity/BaseEntity";
import { CourseEntity } from "../Courses/Domain/Entity/CourseEntity";

const logger = new Logger("MikroORM");
const config: Options = {
  entities: [CourseEntity, BaseEntity],
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