import { Controller } from '@nestjs/common';
import {UserService} from "./user.service";
import {UserDto} from "./user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userServcie: UserService) {}

    async createUser(dto: UserDto) {

    }
}
