import { MikroORM }              from 'mikro-orm';

export const initializeDb = async (settings: any): Promise<void> => {
  const orm = await MikroORM.init(settings);
  const generator = orm.getSchemaGenerator();

  await generator.dropSchema();
  await generator.createSchema();
  await generator.updateSchema();

  await orm.close(true);
}