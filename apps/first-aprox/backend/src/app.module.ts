import { Module } from '@nestjs/common';
import { HealtCheckController } from './controller/HealtCheck/HealtCheck.controller';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [HealtCheckController],
})
export class AppModule {}
