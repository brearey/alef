import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiResponse } from "@nestjs/swagger";
import { FindOneParams } from "./dto/validator.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddChildrenUserDto } from "./dto/add-children-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 200, type: CreateUserDto })
  @Post("create")
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiResponse({ status: 200, type: UpdateUserDto })
  @Patch(":id")
  update(@Param() params: FindOneParams, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+params.id, updateUserDto);
  }

  @ApiResponse({ status: 200, type: UpdateUserDto })
  @Patch("add-children/:id")
  async addChildren(@Param() params: FindOneParams, @Body() addChildrenUserDto: AddChildrenUserDto) {
    const currentChildrenCount = await this.userService.getChildrenCount(+params.id)
    if (currentChildrenCount + addChildrenUserDto.children.length > 5) throw new HttpException('Количество детей превышено', HttpStatus.BAD_REQUEST);
    return this.userService.addChildren(+params.id, addChildrenUserDto);
  }

  @ApiResponse({ status: 200, type: Array<CreateUserDto> })
  @Get("all")
  findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({ status: 200, type: CreateUserDto })
  @Get(":id")
  findOne(@Param() params: FindOneParams) {
    return this.userService.findOne(+params.id);
  }

  @ApiResponse({status: 200})
  @Delete(":id")
  remove(@Param() params: FindOneParams) {
    return this.userService.remove(+params.id);
  }
}
