import { EntityManager }                from "mikro-orm";
import { Test }                         from "@nestjs/testing";
import { MikroOrmModule }               from "nestjs-mikro-orm";
import { ModuleInfrastructureTestCase } from "../Shared/Infrastructure/ModuleInfrastructureTestCase";
import { Loader }                       from "@libs/Shared/Infrastructure/Loader";
import {
  MikroEntities, MikroTest
} from "./Shared/Infrastructure/module.config";
import { ConfigModule, ConfigService } from "@nestjs/config";

export class FirstAproxModuleInfrastructureTestCase
  extends ModuleInfrastructureTestCase {

  static async before(): Promise<void> {

    const loader = new Loader({
      envFilePath: './test/libs/First-aprox-lib/.env.test',
    });
    loader.addSetting([
      MikroTest,
      MikroEntities,
    ])

    await ModuleInfrastructureTestCase.before(loader.retrieve('mikro'));
    ModuleInfrastructureTestCase.module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: loader.retrieveSettings(),
        }),
        MikroOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject:[ConfigService],
          useFactory: async (c: ConfigService) => c.get('mikro')
        }),
        MikroOrmModule.forFeature( loader.retrieve('entities') ),
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
    const em = FirstAproxModuleInfrastructureTestCase.module.get<EntityManager>(
      EntityManager);
    return new repository(em, entity);
  }
}