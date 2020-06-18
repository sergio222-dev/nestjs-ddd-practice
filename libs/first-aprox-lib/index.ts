import config
                          from "@libs/first-aprox-lib/shared/Infrastructure/Persistence/MikroORM/mikro-orm.config";
import { providers }      from "@libs/first-aprox-lib/shared/Infrastructure/context.config";
import { Module }         from "@nestjs/common";
import { MikroOrmModule } from "nestjs-mikro-orm";
import { CourseEntity }   from "@libs/first-aprox-lib/Courses/Domain/Entities/Course.entity";

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    MikroOrmModule.forFeature({entities: [CourseEntity]})
  ],
  providers,
  exports: [MikroOrmModule]
})
export class FirstAproxLibModule {
}