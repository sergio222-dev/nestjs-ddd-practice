import { EntityMetadata, MetadataProvider } from "mikro-orm";

export class MikroMetaDataProvider extends MetadataProvider {

  loadEntityMetadata(meta: EntityMetadata, name: string): Promise<void> {
    return Promise.resolve(undefined);
  }

}