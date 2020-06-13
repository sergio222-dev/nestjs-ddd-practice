import {Controller, Get}              from '@nestjs/common';
import {RandomNumberGeneratorService} from '@app/shared/infrastructure/RandomNumberGenerator.service';

@Controller('/HealtCheck')
export class HealtCheckController {
  constructor(
    private readonly numberGenerator: RandomNumberGeneratorService
  ) {}
s
  @Get()
  getHello(): number {
    return this.numberGenerator.random();
  }
}
