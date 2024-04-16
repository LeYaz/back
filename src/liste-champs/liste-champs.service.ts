import { Injectable } from '@nestjs/common';
import { CreateListeChampDto } from './dto/create-liste-champ.dto';
import { UpdateListeChampDto } from './dto/update-liste-champ.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ListeChamp } from './entities/liste-champ.entity';
import { Repository } from 'typeorm';
import { ListeService } from 'src/liste/liste.service';

@Injectable()
export class ListeChampsService {
  constructor(
    @InjectRepository(ListeChamp) private listeChampRepository: Repository<ListeChamp>,
    private listeService: ListeService,
  ) {}

  async create(createListeChampDto: CreateListeChampDto) {
    const liste = await this.listeService.findOne(createListeChampDto.listeId);
    if(!liste) {
      throw new Error('Liste not found');
    }
    const listeChamp = new ListeChamp();
    listeChamp.libelle = createListeChampDto.libelle;
    listeChamp.liste = liste;
    const now: Date = new Date();
    listeChamp.createdAt = now;
    listeChamp.updatedAt = now;
    return this.listeChampRepository.save(listeChamp);
  }

  findByListeId(listeId: string) {
    return this.listeChampRepository.find({where: { liste: { id: listeId}}});
  }

  findOne(id: string) {
    return this.listeChampRepository.findOneBy({id});
  }

  update(id: string, updateListeChampDto: UpdateListeChampDto) {
    //TODO modifier date updated + status + depense ??
    return this.listeChampRepository.update(id, updateListeChampDto);
  }

  remove(id: string) {
    return this.listeChampRepository.delete(id);
  }
}
