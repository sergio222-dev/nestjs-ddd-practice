import { Module, OnApplicationBootstrap } from "@nestjs/common";
import { MikroOrmModule }                 from "nestjs-mikro-orm";
import { ConfigService }                  from "@nestjs/config";
import { CourseEntity }                   from "@libs/First-aprox-lib/Courses/Domain/Entities/Course.entity";
import { CourseCreatorService }           from "@libs/First-aprox-lib/Courses/Application/Create/CourseCreator.service";
import { CqrsModule }                     from "@nestjs/cqrs";

/**
 * Settings for First-aprox Bounded Context
 */

/**
 * Load env files
 */
// const loader = new Loader(
//   { envFilePath: "./libs/first-aprox-lib/.env." + process.env.NODE_ENV }
// );
//
// /**
//  * Add settings
//  */
// loader.addSetting([
//   MikroSQL,
//   Providers
// ]);

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: loader.retrieveSettings() // Settings for ConfigModule
    // }),
    CqrsModule,
    MikroOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        await ({
          type: configService.get("FIRST_APROX_MIKRO_ORM_DRIVER"),
          dbName: configService.get("FIRST_APROX_MIKRO_ORM_DB_NAME"),
          host: configService.get("FIRST_APROX_MIKRO_ORM_HOST"),
          user: configService.get("FIRST_APROX_MIKRO_ORM_USER"),
          password: configService.get("FIRST_APROX_MIKRO_ORM_PASS"),
          port: configService.get("FIRST_APROX_MIKRO_ORM_PORT"),
          entities: [CourseEntity],
          discovery: {
            requireEntitiesArray: true
          }
        }),
      inject: [ConfigService]
    }),
    MikroOrmModule.forFeature({ entities: [CourseEntity] })
  ],
  providers: [ //Should I move it to a single file?
    CourseCreatorService
  ]
})
export class FirstAproxLibModule implements OnApplicationBootstrap {
  async onApplicationBootstrap(): Promise<void> {
    // await ModuleDataBaseGenerator();
  }
}