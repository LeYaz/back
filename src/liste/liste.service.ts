import { Injectable } from '@nestjs/common';
import { CreateListeDto } from './dto/create-liste.dto';
import { UpdateListeDto } from './dto/update-liste.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Liste } from './entities/liste.entity';
import { Repository } from 'typeorm';
import { GroupService } from 'src/group/group.service';

@Injectable()
export class ListeService {
  constructor(
    @InjectRepository(Liste) private listeRepository: Repository<Liste>,
    private groupService: GroupService,
  ) {}
  async create(createListeDto: CreateListeDto) {
    const group = await this.groupService.findOne(createListeDto.groupId);
    if(!group) {
      throw new Error('Group not found');
    }
    const liste = new Liste();
    liste.name = createListeDto.name;
    liste.group = group;
    const now: Date = new Date();
    liste.createdAt = now;
    liste.updatedAt = now;
    return this.listeRepository.save(liste);
  }

  findByGroupeId(groupeId: number) {
    return this.listeRepository.find({where: { group: { id: groupeId}}})
  }

  findOne(id: string) {
    return this.listeRepository.findOneBy({ id });
  }

  update(id: string, updateListeDto: UpdateListeDto) {
    //TODO vérifier en recréant la db que le fix est ok
    return this.listeRepository.update(id, updateListeDto);
  }

  remove(id: string) {
    return this.listeRepository.delete(id);
  }
}
