import { EntityManager }                from "mikro-orm";
import { Test }                         from "@nestjs/testing";
import { MikroOrmModule }               from "nestjs-mikro-orm";
import { CourseEntity }                 from "@libs/first-aprox-lib/Courses/Domain/Entities/Course.entity";
import { ModuleInfrastructureTestCase } from "../../shared/Infrastructure/ModuleInfrastructureTestCase";
import { mikroORMTestingConfig }        from "../../shared/Infrastructure/Persistense/MikroORM/mikroORMTesting.config";

export class CourseModuleInfrastructureTestCase
  extends ModuleInfrastructureTestCase {

  static async before(): Promise<void> {
    await ModuleInfrastructureTestCase.before();
    ModuleInfrastructureTestCase.module = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRoot(mikroORMTestingConfig),
        MikroOrmModule.forFeature({ entities: [CourseEntity] })
      ],
      exports: [MikroOrmModule]
    }).compile();
  }

  static async after(): Promise<void> {
    const em = ModuleInfrastructureTestCase.module.get(EntityManager);
    await em.getConnection().close()
    await ModuleInfrastructureTestCase.module.close();
  }

  //TODO Find a way that the FW resolve dependencies from repositories
  static repository<T>(repository: any, entity: any): T {
    const em = CourseModuleInfrastructureTestCase.module.get<EntityManager>(
      EntityManager);
    return new repository(em, entity);
  }
}