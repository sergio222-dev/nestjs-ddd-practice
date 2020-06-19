import { providers }                      from "@libs/First-aprox-lib/Shared/Infrastructure/context.config";
import { Module, OnApplicationBootstrap } from "@nestjs/common";
import { MikroOrmModule }                 from "nestjs-mikro-orm";
import { ConfigModule, ConfigService }    from "@nestjs/config";
import { Loader }                         from "@libs/Shared/Infrastructure/LoaderWithEnv";
import { Mikro }                          from "@libs/First-aprox-lib/Shared/Infrastructure/first-aprox.config";
import { CourseEntity }                   from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";

const loader = new Loader(
  { envFilePath: "./libs/first-aprox-lib/.env." + process.env.NODE_ENV });
loader.addSetting([Mikro]);

@Module({
  imports: [
    ConfigModule.forRoot({
      load: loader.retrieveSettings()
    }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => await configService.get(
        "Mikro"),
      inject: [ConfigService]
    }),
    MikroOrmModule.forFeature({ entities: [CourseEntity] })
  ],
  providers
})
export class FirstAproxLibModule implements OnApplicationBootstrap {
  async onApplicationBootstrap(): Promise<void> {
    // await ModuleDataBaseGenerator();
  }
}