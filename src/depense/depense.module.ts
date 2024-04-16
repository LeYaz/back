import { Module } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { DepenseController } from './depense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { ListeChampsModule } from 'src/liste-champs/liste-champs.module';
import { UsersModule } from 'src/users/users.module';
import { GroupModule } from 'src/group/group.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Depense]),
    ListeChampsModule,
    UsersModule,
    GroupModule,
  ],
  controllers: [DepenseController],
  providers: [DepenseService],
})
export class DepenseModule {}
