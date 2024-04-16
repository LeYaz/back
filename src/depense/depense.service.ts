import { Injectable } from '@nestjs/common';
import { CreateDepenseDto } from './dto/create-depense.dto';
import { UpdateDepenseDto } from './dto/update-depense.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Depense } from './entities/depense.entity';
import { Repository } from 'typeorm';
import { ListeChampsService } from 'src/liste-champs/liste-champs.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { ListeChamp } from 'src/liste-champs/entities/liste-champ.entity';
import { Group } from 'src/group/entities/group.entity';
import { GroupService } from 'src/group/group.service';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense) private depenseRepository: Repository<Depense>,
    private listeChampsService: ListeChampsService,
    private userserivce: UsersService,
    private groupService: GroupService,
  ) {}

  async create(createDepenseDto: CreateDepenseDto) {
    const listeChamps: ListeChamp[] = this.getListeChamp(createDepenseDto.listeChampsId);
    const byUsers: User[] = this.getUsersList(createDepenseDto.byId);
    const forUsers: User[] = this.getUsersList(createDepenseDto.forId);
    const group: Group = await this.groupService.findOne(createDepenseDto.groupId);
    const depense = new Depense();
    depense.name = createDepenseDto.name;
    depense.amount = createDepenseDto.amount;
    depense.createdAt = new Date();
    depense.by = byUsers;
    depense.for = forUsers;
    depense.listeChamps = listeChamps;
    depense.group = group;
    return this.depenseRepository.save(depense);
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

  getUsersList(usersId: number[]): User[] {
    let users: User[] = [];
    usersId.forEach(async id => {
      const user = await this.userserivce.findOne(id);
      if(user) {
        users.push(user);
      }
    });
    return users;
  }

  getListeChamp(champsId: string[]): ListeChamp[] {
    let listeChamps: ListeChamp[] = [];
    champsId.forEach(async id => {
      const listeChamp = await this.listeChampsService.findOne(id);
      if(listeChamp) {
        listeChamps.push(listeChamp);
      }
    });
    return listeChamps;
  
  }


}
