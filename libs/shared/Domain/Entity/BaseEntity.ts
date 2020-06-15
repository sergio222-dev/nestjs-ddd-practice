import { IdEntity, PrimaryKey } from "mikro-orm";

export abstract class BaseEntity implements IdEntity<BaseEntity>{
  @PrimaryKey({
    unique: true,
  })
  id!: string;
}