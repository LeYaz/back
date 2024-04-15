import { Injectable } from '@nestjs/common';
import { CreateListeChampDto } from './dto/create-liste-champ.dto';
import { UpdateListeChampDto } from './dto/update-liste-champ.dto';

@Injectable()
export class ListeChampsService {
  create(createListeChampDto: CreateListeChampDto) {
    return 'This action adds a new listeChamp';
  }

  findAll() {
    return `This action returns all listeChamps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listeChamp`;
  }

  update(id: number, updateListeChampDto: UpdateListeChampDto) {
    return `This action updates a #${id} listeChamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} listeChamp`;
  }
}
