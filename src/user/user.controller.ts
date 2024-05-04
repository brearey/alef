import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create.user.dto";
import {
    ApiOkResponse,
    ApiResponse
} from "@nestjs/swagger";

@Controller('user')
export class UserController {
    constructor(private readonly userServcie: UserService) {}

    @ApiResponse({status: 200, type: CreateUserDto})
    @Post()
    @ApiOkResponse()
    async create(@Body() userDto: CreateUserDto) {
        return await this.userServcie.createUser(userDto)
    }
}