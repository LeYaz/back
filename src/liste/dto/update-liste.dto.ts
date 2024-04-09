import { PartialType } from '@nestjs/mapped-types';
import { CreateListeDto } from './create-liste.dto';

export class UpdateListeDto extends PartialType(CreateListeDto) {}
