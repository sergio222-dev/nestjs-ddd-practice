import { Module }     from '@nestjs/common';
import {providers}    from "@libs/first-aprox-lib/config";

@Module({
  providers,
  exports: providers,
})
export class FirstAproxLibModule {}