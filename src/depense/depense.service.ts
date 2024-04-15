import { Injectable } from '@nestjs/common';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';

@Injectable()
export class DepenseService {
  create(createDepenseDto: CreateDepenseDto) {
    return 'This action adds a new depense';
  }

  findAll() {
    return `This action returns all depense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} depense`;
  }

  update(id: number, updateDepenseDto: UpdateDepenseDto) {
    return `This action updates a #${id} depense`;
  }

  remove(id: number) {
    return `This action removes a #${id} depense`;
  }
}
