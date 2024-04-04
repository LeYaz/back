import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    //TO DO: Add more validation rules
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
