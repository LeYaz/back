import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    private userService: UsersService,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const user = await this.userService.findOne(createProfileDto.userId);
    if(!user) {
      throw new Error('User not found');
    }

    const profile = new Profile();
    profile.firstName = createProfileDto.firstName;
    profile.lastName = createProfileDto.lastName;
    profile.userName = createProfileDto.userName;
    profile.user = user;
    return this.profileRepository.save(profile);
  }

  findAll() {
    return this.profileRepository.find();
  }

  findOne(id: number) {
    return this.profileRepository.findOneBy({ id });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.profileRepository.delete(id);
  }
}
