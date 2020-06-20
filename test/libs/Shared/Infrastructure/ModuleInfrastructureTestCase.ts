import {  TestingModule } from "@nestjs/testing";
import { initializeDb }   from "@libs/Shared/Infrastructure/Persistence/Mikro-ORM/create-schema.mikro";

export class ModuleInfrastructureTestCase {
  protected static module: TestingModule;
  static async before(settings): Promise<void> {
    await initializeDb(settings);
  }
}