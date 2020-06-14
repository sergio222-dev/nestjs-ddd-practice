import { Module }                       from '@nestjs/common';
import { RandomNumberGeneratorService } from './Infrastructure/RandomNumberGenerator.service';

@Module({
  providers: [RandomNumberGeneratorService],
  exports: [RandomNumberGeneratorService],
})
export class SharedModule {

}