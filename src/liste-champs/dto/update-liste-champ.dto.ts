import { PartialType } from '@nestjs/mapped-types';
import { CreateListeChampDto } from './create-liste-champ.dto';

export class UpdateListeChampDto extends PartialType(CreateListeChampDto) {}
