import { Module } from '@nestjs/common';
import { ListeChampsService } from './liste-champs.service';
import { ListeChampsController } from './liste-champs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListeChamp } from './entities/liste-champ.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ListeChamp])],
  controllers: [ListeChampsController],
  providers: [ListeChampsService],
})
export class ListeChampsModule {}
