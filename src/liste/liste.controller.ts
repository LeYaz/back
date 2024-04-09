import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ListeService } from './liste.service';
import { CreateListeDto } from './dto/create-liste.dto';
import { UpdateListeDto } from './dto/update-liste.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('liste')
export class ListeController {
  constructor(private readonly listeService: ListeService) {}

  @Post()
  create(@Body() createListeDto: CreateListeDto) {
    return this.listeService.create(createListeDto);
  }

  @Get('/group/:id/')
  findByGroupID(@Param('id') id: string) {
    return this.listeService.findByGroupeId(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListeDto: UpdateListeDto) {
    return this.listeService.update(id, updateListeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listeService.remove(id);
  }
}
