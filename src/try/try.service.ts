// import { Injectable } from '@nestjs/common';
// import { CreateTryDto } from './dto/create-try.dto';
// import { UpdateTryDto } from './dto/update-try.dto';
// import { Try } from './entities/try.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ProfileService } from 'src/profile/profile.service';
// import { CardService } from 'src/card/card.service';

// @Injectable()
// export class TryService {

//   constructor(
//     @InjectRepository(Try) private tryRepository: Repository<Try>,
//     private profileService: ProfileService,
//     private cardService: CardService,
//   ) {}

//   async create(createTryDto: CreateTryDto) {
//     const profile = await this.profileService.findOne(createTryDto.profileId);
//     if(!profile) {  
//       throw new Error('Profile not found');
//     }
//     const card = await this.cardService.findOne(createTryDto.cardId);
//     if(!card) {  
//       throw new Error('Card not found');
//     }

//     let tryy = new Try();
//     tryy.profile = profile;
//     tryy.card = card;
//     tryy.success = createTryDto.success;
//     return this.tryRepository.save(this.updateNextTry(tryy, true)); 
//   }

//   findAll() {
//     return this.tryRepository.find();
//   }

//   findOne(id: number) {
//     return this.tryRepository.findOne({ where: { id } });
//   }

//   async update(id: number, updateTryDto: UpdateTryDto) {
//     let tryy = await this.findOne(id);
//     if(!tryy) {
//       throw new Error('Try not found');
//     }
//     tryy.success = updateTryDto.success;
//     await this.tryRepository.update(id , this.updateNextTry(tryy, false));
//     return tryy;
//   }

//   remove(id: number) {
//     return this.tryRepository.delete(id);
//   }

//   private updateNextTry(tryy: Try, isNewTry: boolean) : Try {
//     let today = new Date();
//     tryy.date = today;
//     tryy.nbTry = isNewTry ? 1 : tryy.nbTry + 1;
//     if(!tryy.success) {
//       let nextTry = new Date(today);
//       tryy.nextTry = new Date(nextTry.setDate(nextTry.getDate() + 1));
//       tryy.nbSuccess = isNewTry ? 0 : tryy.nbSuccess;
//     } else {
//       let nextTry = new Date(today);
//       tryy.nextTry = new Date(nextTry.setDate(nextTry.getDate() + 3));
//       tryy.nbSuccess = isNewTry ? 1 : tryy.nbSuccess + 1;
//     }
//     return tryy;
//   }
// }
