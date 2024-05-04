import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create.user.dto";
import { ApiOkResponse, ApiResponse } from "@nestjs/swagger";

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
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
