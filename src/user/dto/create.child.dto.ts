import {ApiProperty} from "@nestjs/swagger";

export class CreateChildDto {
    @ApiProperty({example: 'Иванов Ваня', description: 'ФИО ребенка'})
    readonly fullName: string;

    @ApiProperty({example: '6', description: 'Возраст ребенка'})
    readonly age: number;
}