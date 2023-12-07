import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCardDto {

    @IsNotEmpty()
    @IsString()
    recto: string;

    @IsNotEmpty()
    @IsString()
    verso: string;

    @IsNotEmpty()
    @IsNumber()
    profileId: number;

    @IsNotEmpty()
    @IsNumber()
    groupId: number;
}
