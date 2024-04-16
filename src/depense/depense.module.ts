import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Depense])],
  controllers: [DepenseController],
  providers: [DepenseService],
})
export class DepenseModule {}
