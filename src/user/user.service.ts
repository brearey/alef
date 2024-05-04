import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { DatabaseService } from "../database/database.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AddChildrenUserDto } from "./dto/add-children-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(userDto: CreateUserDto) {
    return this.databaseService.user.create({
      data: {
        fullName: userDto.fullName,
        age: userDto.age,
        email: userDto.email,
        children: {
          createMany: {
            data: userDto.children,
          },
        },
      },
      include: {
        children: true,
      },
    });
  }

  async updateUser(id: number, userDto: UpdateUserDto) {
    return this.databaseService.user.update({
      data: {
        fullName: userDto.fullName,
        age: userDto.age,
        email: userDto.email,
      },
      where: {
        id: id,
      },
    });
  }

  async addChildren(id: number, addChildrenUserDto: AddChildrenUserDto) {
    return this.databaseService.user.update({
      data: {
        children: {
          createMany: {
            data: addChildrenUserDto.children
          }
        }
      },
      where: {
        id: id,
      },
    });
  }

  async getChildrenCount(id: number) {
    return this.databaseService.child.count({
      where: {
        parent_id: id
      },
    });
  }

  async findAll() {
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id: id,
      },
      include: {
        children: true,
      },
    });
  }

  remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
