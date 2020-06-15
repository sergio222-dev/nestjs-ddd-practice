import * as faker from 'faker';

export class MotherCreator {
  private static faker = faker;

  public static random() {
    return MotherCreator.faker;
  }
}