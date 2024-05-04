import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiResponse } from "@nestjs/swagger";
import { FindOneParams } from "./dto/validator.dto";


@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ status: 200, type: CreateUserDto })
  @Post("create")
  async create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiResponse({ status: 200, type: Array<CreateUserDto> })
  @Get("all")
  async findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({ status: 200, type: CreateUserDto })
  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return this.userService.findOne(+params.id);
  }
}
