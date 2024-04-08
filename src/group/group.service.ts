import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { ProfileService } from 'src/profile/profile.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
    private userService: UsersService,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const user = await this.userService.findOne(createGroupDto.userId);
    // const profile = await this.profileService.findOne(createGroupDto.profileId);
    if(!user) {  
      throw new Error('User not found');
    }
    const group = new Group();
    group.name = createGroupDto.name;
    group.users = [user];
    
    return this.groupRepository.save(group);
    
    }

  findAll() {
    return this.groupRepository.find();
  }

  findOne(id: number) {
    return this.groupRepository.findOneBy({ id });
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.groupRepository.update(id, updateGroupDto);
  }

  remove(id: number) {
    return this.groupRepository.delete(id);
  }

  findByUserId(userId: number) {
    return this.groupRepository.find({where: { users: { id: userId}}})
  }
}
