import {  TestingModule }   from "@nestjs/testing";
import { initializeTestDb } from "../../first-aprox-lib/shared/Infrastructure/bin/create-schema.mikro";

export class ModuleInfrastructureTestCase {
  protected static module: TestingModule;
  static async before(): Promise<void> {
    await initializeTestDb();
  }
}