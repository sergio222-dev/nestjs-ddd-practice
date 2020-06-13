import { Module } from '@nestjs/common';
import { RandomNumberGeneratorService } from './infrastructure/RandomNumberGenerator.service';

@Module({
  providers: [RandomNumberGeneratorService],
  exports: [RandomNumberGeneratorService],
})
export class SharedModule {

}