import { EntityRepository } from "mikro-orm";

export abstract class MikroRepository<T> extends EntityRepository<T> {}