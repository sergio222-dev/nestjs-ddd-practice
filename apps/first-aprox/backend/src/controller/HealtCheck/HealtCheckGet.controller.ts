import {Controller, Get}              from '@nestjs/common';
import {RandomNumberGeneratorService} from 'Shared/Infrastructure/RandomNumberGenerator.service';

@Controller('/healtcheck')
export class HealtCheckGetController {
  constructor(
    private readonly numberGenerator: RandomNumberGeneratorService
  ) {}

  @Get()
  getRandomNumber() {
    return Math.random();
  }
}
