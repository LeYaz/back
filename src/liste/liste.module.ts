import { Module } from '@nestjs/common';
import { ListeService } from './liste.service';
import { ListeController } from './liste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Liste } from './entities/liste.entity';
import { GroupModule } from 'src/group/group.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Liste]),
    GroupModule,
  ],
  controllers: [ListeController],
  providers: [ListeService],
})
export class ListeModule {}
