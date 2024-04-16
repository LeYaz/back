import { Module } from '@nestjs/common';
import { ListeChampsService } from './liste-champs.service';
import { ListeChampsController } from './liste-champs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListeChamp } from './entities/liste-champ.entity';
import { ListeModule } from 'src/liste/liste.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListeChamp]),
    ListeModule,
  ],
  controllers: [ListeChampsController],
  providers: [ListeChampsService],
  exports: [ListeChampsService]
})
export class ListeChampsModule {}
