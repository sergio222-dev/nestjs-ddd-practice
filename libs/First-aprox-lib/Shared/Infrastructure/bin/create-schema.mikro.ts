import { MikroORM } from 'mikro-orm';
import config       from "@libs/First-aprox-lib/Shared/Infrastructure/Persistence/MikroORM/mikro-orm.config";

export const ModuleDataBaseGenerator = async (): Promise<void> => {
  const orm = await MikroORM.init(config);
  const generator = orm.getSchemaGenerator();
  await generator.dropSchema();
  await generator.createSchema();
  await generator.updateSchema();

  await orm.close(true);
};