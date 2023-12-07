import { Injectable } from '@nestjs/common';
import { CreateTryDto } from './dto/create-try.dto';
import { UpdateTryDto } from './dto/update-try.dto';
import { Try } from './entities/try.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TryService {

  constructor(
    @InjectRepository(Try) private tryRepository: Repository<Try>
  ) {}
  create(createTryDto: CreateTryDto) {
    return this.tryRepository.save(createTryDto); 
  }

  findAll() {
    return this.tryRepository.find();
  }

  findOne(id: number) {
    return this.tryRepository.findOneBy({ id });
  }

  update(id: number, updateTryDto: UpdateTryDto) {
    return this.tryRepository.update(id, updateTryDto);
  }

  remove(id: number) {
    return this.tryRepository.delete(id);
  }
}
