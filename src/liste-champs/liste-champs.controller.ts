import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListeChampsService } from './liste-champs.service';
import { CreateListeChampDto } from './dto/create-liste-champ.dto';
import { UpdateListeChampDto } from './dto/update-liste-champ.dto';

@Controller('liste-champs')
export class ListeChampsController {
  constructor(private readonly listeChampsService: ListeChampsService) {}

  @Post()
  create(@Body() createListeChampDto: CreateListeChampDto) {
    return this.listeChampsService.create(createListeChampDto);
  }

  @Get('/liste/:id/')
  findByListeId(@Param('id') id: string) {
    return this.listeChampsService.findByListeId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listeChampsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListeChampDto: UpdateListeChampDto) {
    return this.listeChampsService.update(id, updateListeChampDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listeChampsService.remove(id);
  }
}
