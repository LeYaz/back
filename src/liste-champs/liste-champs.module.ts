import { Module } from '@nestjs/common';
import { ListeChampsService } from './liste-champs.service';
import { ListeChampsController } from './liste-champs.controller';

@Module({
  controllers: [ListeChampsController],
  providers: [ListeChampsService],
})
export class ListeChampsModule {}
