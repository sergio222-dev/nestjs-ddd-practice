import { Module }              from "@nestjs/common";
import { CoursePutController } from "./controller/Course/CoursePut.controller";
import { SharedModule }        from "@libs/Shared";
import { FirstAproxLibModule } from "@libs/First-aprox-lib";
import { ConfigModule }        from "@nestjs/config";

@Module({
  imports: [
    SharedModule,
    FirstAproxLibModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    })
  ],
  controllers: [CoursePutController],
})
export class AppModule {
}
