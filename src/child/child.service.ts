import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { UpdateChildDto } from "./dto/update-child.dto";

@Injectable()
export class ChildService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.child.findMany();
  }

  findOne(id: number) {
    return this.databaseService.child.findUnique({
      where: {
        id: id,
      },
      include: {
        parent: true,
      },
    });
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return this.databaseService.child.update({
      data: {
        fullName: updateChildDto.fullName,
        age: updateChildDto.age,
      },
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.databaseService.child.delete({
      where: {
        id: id,
      },
    });
  }
}
