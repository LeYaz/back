import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateListeChampDto {
    @IsNotEmpty()
    libelle: string;

    @IsNotEmpty()
    listeId: string;

    @IsOptional()
    status: boolean = false;

    @IsOptional()
    depenseId: string;
    
}
