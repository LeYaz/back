import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateListeDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    groupId: number;
}
