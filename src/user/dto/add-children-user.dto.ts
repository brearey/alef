import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { ArrayMaxSize, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CreateChildDto } from "./create-child.dto";

export class AddChildrenUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: "[]", description: "Массив объектов типа Child" })
  @ArrayMaxSize(5, { message: "Нельзя добавить больше 5 детей" })
  @ValidateNested()
  @Type(() => CreateChildDto)
  readonly children: CreateChildDto[];
}
