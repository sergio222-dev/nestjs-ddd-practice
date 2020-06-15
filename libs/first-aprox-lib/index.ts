import config     from "@libs/first-aprox-lib/config/mikro-orm.config";
import { Module } from "@nestjs/common";
import { providers }      from "@libs/first-aprox-lib/config/context.config";
import { MikroOrmModule } from "nestjs-mikro-orm";

@Module({
  imports: [
    MikroOrmModule.forRoot(config)
  ],
  providers,
  exports: providers
})
export class FirstAproxLibModule {
}