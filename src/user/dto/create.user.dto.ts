import { ApiProperty } from "@nestjs/swagger";
import { CreateChildDto } from "./create.child.dto";
import { ArrayMaxSize, IsArray, IsEmail, IsInt, IsNotEmpty, Length, Max, Min, ValidateNested } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'Иванов Иван Иванович', description: 'ФИО'})
    @IsNotEmpty()
    @Length(8, 50)
    readonly fullName: string;

    @ApiProperty({example: '35', description: 'Возраст'})
    @IsNotEmpty()
    @IsInt()
    @Min(18)
    @Max(100)
    readonly age: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: '[]', description: 'Массив объектов типа Child'})
    @IsArray()
    @ArrayMaxSize(5, {message: 'Нельзя добавить больше 5 детей'})
    @ValidateNested()
    readonly children: CreateChildDto[]
}