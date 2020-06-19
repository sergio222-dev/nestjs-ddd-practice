import { NestFactory } from "@nestjs/core";
import { AppModule }   from "@app/First-aprox/backend/src/app.module";
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();