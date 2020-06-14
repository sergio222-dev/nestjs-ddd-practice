import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomNumberGeneratorService {
  public random(): number {
    return Math.random();
  }
}