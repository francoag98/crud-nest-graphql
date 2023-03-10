import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersResolver } from './developers.resolver';

@Module({
  providers: [DevelopersService, DevelopersResolver]
})
export class DevelopersModule {}
