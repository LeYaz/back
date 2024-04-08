// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { TryService } from './try.service';
// import { CreateTryDto } from './dto/create-try.dto';
// import { UpdateTryDto } from './dto/update-try.dto';

// @Controller('try')
// export class TryController {
//   constructor(private readonly tryService: TryService) {}

//   @Post()
//   create(@Body() createTryDto: CreateTryDto) {
//     return this.tryService.create(createTryDto);
//   }

//   @Get()
//   findAll() {
//     return this.tryService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.tryService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateTryDto: UpdateTryDto) {
//     return this.tryService.update(+id, updateTryDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.tryService.remove(+id);
//   }
// }
