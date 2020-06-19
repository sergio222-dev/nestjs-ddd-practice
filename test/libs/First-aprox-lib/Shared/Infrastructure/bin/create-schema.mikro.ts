import { MikroORM }              from 'mikro-orm';
import { mikroORMTestingConfig } from "../../../../Shared/Infrastructure/Persistense/MikroORM/mikroORMTesting.config";

export const initializeTestDb = async (): Promise<void> => {
  const orm = await MikroORM.init(mikroORMTestingConfig);
  const generator = orm.getSchemaGenerator();

  const dropDump = await generator.getDropSchemaSQL();
  // console.log(dropDump);

  const createDump = await generator.getCreateSchemaSQL();
  // console.log(createDump);

  const updateDump = await generator.getUpdateSchemaSQL();
  // console.log(updateDump);
  //
  // there is also `generate()` method that returns drop + create queries
  const dropAndCreateDump = await generator.generate();
  // console.log(dropAndCreateDump);

  // or you can run those queries directly, but be sure to check them first!
  await generator.dropSchema();
  await generator.createSchema();
  await generator.updateSchema();

  await orm.close(true);
}