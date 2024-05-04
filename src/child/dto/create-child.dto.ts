import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, Length, Max, Min } from "class-validator";

export class CreateChildDto {
  @ApiProperty({ example: "Иванов Ваня", description: "ФИО ребенка" })
  @IsNotEmpty()
  @Length(8, 50)
  readonly fullName: string;

  @ApiProperty({ example: 6, description: "Возраст ребенка" })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(17)
  readonly age: number;
}
