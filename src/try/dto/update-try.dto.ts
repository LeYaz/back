import { PartialType } from '@nestjs/mapped-types';
import { CreateTryDto } from './create-try.dto';

export class UpdateTryDto extends PartialType(CreateTryDto) {}
