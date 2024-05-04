import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { IsEmail, IsInt, IsNotEmpty, Length, Max, Min } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: "Иванов Иван Иванович", description: "ФИО" })
  @IsNotEmpty()
  @Length(8, 50)
  readonly fullName: string;

  @ApiProperty({ example: "35", description: "Возраст" })
  @IsNotEmpty()
  @IsInt()
  @Min(18)
  @Max(100)
  readonly age: number;

  @ApiProperty({ example: "user@mail.ru", description: "Почта" })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
