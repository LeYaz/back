import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateDepenseDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    byId: number[];

    @IsNotEmpty()
    forId: number[];

    @IsNotEmpty()
    groupId: number;

    @IsOptional()
    listeChampsId: string[];
}
