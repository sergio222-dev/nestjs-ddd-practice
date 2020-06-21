import { EntityManager }                from "mikro-orm";
import { Test }                         from "@nestjs/testing";
import { MikroOrmModule }               from "nestjs-mikro-orm";
import { ModuleInfrastructureTestCase } from "../Shared/Infrastructure/ModuleInfrastructureTestCase";
import { ConfigModule, ConfigService }  from "@nestjs/config";
import { CourseEntity }                 from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";

export class FirstAproxModuleInfrastructureTestCase
  extends ModuleInfrastructureTestCase {

  static async before(): Promise<void> {

    // const loader = new Loader({
    //   envFilePath: "./test/libs/First-aprox-lib/.env.test"
    // });
    // loader.addSetting([
    //   MikroTest,
    //   MikroEntities
    // ]);
    ModuleInfrastructureTestCase.module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: [".env.test"],
          isGlobal: true
        }),
        MikroOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (c: ConfigService) => ({
            type: c.get("FIRST_APROX_MIKRO_ORM_TYPE"),
            dbName: c.get("FIRST_APROX_MIKRO_ORM_DBNAME"),
            entities: [CourseEntity],
            discovery: {
              requireEntitiesArray: true
            }
          })
        }),
        MikroOrmModule.forFeature({ entities: [CourseEntity] })
      ],
      exports: [MikroOrmModule]
    }).compile();

    await ModuleInfrastructureTestCase.before(
      FirstAproxModuleInfrastructureTestCase.module.get(ConfigService)
    );
  }

  static async after(): Promise<void> {
    const em = ModuleInfrastructureTestCase.module.get(EntityManager);
    await em.getConnection().close();
    await ModuleInfrastructureTestCase.module.close();
  }

  //TODO Find a way that the FW resolve dependencies from repositories
  static repository<T>(repository: any, entity: any): T {
    const em = FirstAproxModuleInfrastructureTestCase.module.get<EntityManager>(
      EntityManager);
    return new repository(em, entity);
  }
}