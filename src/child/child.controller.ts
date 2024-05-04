import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ChildService } from "./child.service";
import { UpdateChildDto } from "./dto/update-child.dto";
import { FindOneParams } from "../user/dto/validator.dto";

@Controller("child")
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Get("all")
  findAll() {
    return this.childService.findAll();
  }

  @Get(":id")
  findOne(@Param() params: FindOneParams) {
    return this.childService.findOne(+params.id);
  }

  @Patch(":id")
  update(@Param() params: FindOneParams, @Body() updateChildDto: UpdateChildDto) {
    return this.childService.update(+params.id, updateChildDto);
  }

  @Delete(":id")
  remove(@Param() params: FindOneParams) {
    return this.childService.remove(+params.id);
  }
}
