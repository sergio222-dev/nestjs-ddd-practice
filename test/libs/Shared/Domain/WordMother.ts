import { MotherCreator } from "./MotherCreator";

export class WordMother {
  public static random(): string {
    return MotherCreator.random().random.words();
  }
}