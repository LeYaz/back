import { Module } from '@nestjs/common';
import { TryService } from './try.service';
import { TryController } from './try.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Try } from './entities/try.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Try])],
  controllers: [TryController],
  providers: [TryService],
})
export class TryModule {}
