import { Module, OnApplicationBootstrap } from "@nestjs/common";
import { MikroOrmModule }                 from "nestjs-mikro-orm";
import { ConfigModule, ConfigService }    from "@nestjs/config";
import { Loader }                         from "@libs/Shared/Infrastructure/Loader";
import {
  MikroSQL, Providers
}                                         from "@libs/First-aprox-lib/Shared/Infrastructure/first-aprox.config";
import { CourseEntity }                   from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";

/**
 * Settings for First-aprox Bounded Context
 */

/**
 * Load env files
 */
const loader = new Loader(
  { envFilePath: "./libs/first-aprox-lib/.env." + process.env.NODE_ENV }
);

/**
 * Add settings
 */
loader.addSetting([
  MikroSQL,
  Providers
]);

@Module({
  imports: [
    ConfigModule.forRoot({
      load: loader.retrieveSettings() // Settings for ConfigModule
    }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        await configService.get("mikro"),
      inject: [ConfigService]
    }),
    MikroOrmModule.forFeature({ entities: [CourseEntity] })
  ],
  providers: loader.retrieve("providers").providers
})
export class FirstAproxLibModule implements OnApplicationBootstrap {
  async onApplicationBootstrap(): Promise<void> {
    // await ModuleDataBaseGenerator();
  }
}