// import { Injectable } from '@nestjs/common';
// import { CreateCardDto } from './dto/create-card.dto';
// import { UpdateCardDto } from './dto/update-card.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Card } from './entities/card.entity';
// import { Repository } from 'typeorm';
// import { ProfileService } from 'src/profile/profile.service';
// import { GroupService } from 'src/group/group.service';

// @Injectable()
// export class CardService {
//   constructor(
//     @InjectRepository(Card) private cardRepository: Repository<Card>,
//     private profileService: ProfileService,
//     private groupService: GroupService,
//   ) {}

//   async create(createCardDto: CreateCardDto) {
//     const profile = await this.profileService.findOne(createCardDto.profileId);
//     if(!profile) {  
//       throw new Error('Profile not found');
//     }
//     const group = await this.groupService.findOne(createCardDto.groupId);
//     if(!group) {  
//       throw new Error('Group not found');
//     }
//     const card = new Card();
//     card.recto = createCardDto.recto;
//     card.verso = createCardDto.verso;
//     card.createdBy = profile;
//     card.group = group;
//     return this.cardRepository.save(card);
//   }

//   findAll() {
//     return this.cardRepository.find();
//   }

//   findOne(id: number) {
//     return this.cardRepository.findOneBy({ id });
//   }

//   update(id: number, updateCardDto: UpdateCardDto) {
//     return this.cardRepository.update(id, updateCardDto);
//   }

//   remove(id: number) {
//     return this.cardRepository.delete(id);
//   }
// }
