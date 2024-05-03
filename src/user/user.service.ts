import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./create.user.dto";
import {DatabaseService} from "../database/database.service";

@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService) {}

    async createUser(userDto: CreateUserDto) {
        return this.databaseService.user.create({
            data: {
                fullName: userDto.fullName,
                age: userDto.age,
                email: userDto.email,
            }
        });
    }
}
