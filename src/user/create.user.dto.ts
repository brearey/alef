import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'Иванов Иван Иванович', description: 'ФИО'})
    readonly fullName: string;

    @ApiProperty({example: '35', description: 'Возраст'})
    readonly age: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    readonly email: string;
}