import {Body, Controller, HttpException, HttpStatus, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./create.user.dto";
import {ApiInternalServerErrorResponse, ApiOkResponse, ApiResponse} from "@nestjs/swagger";
import { Prisma } from "@prisma/client"

@Controller('user')
export class UserController {
    constructor(private readonly userServcie: UserService) {}

    @ApiResponse({status: 200, type: CreateUserDto})
    @Post()
    @ApiOkResponse()
    @ApiInternalServerErrorResponse()
    async create(@Body() userDto: CreateUserDto) {
        const result = await this.userServcie.createUser(userDto)
        if (result instanceof Prisma.PrismaClientKnownRequestError) {
            throw new HttpException('Пользователь не создан', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return result
    }
}
