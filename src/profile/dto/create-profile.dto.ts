import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProfileDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString() 
    lastName: string;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
