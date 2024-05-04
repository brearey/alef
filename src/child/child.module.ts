import { Module } from "@nestjs/common";
import { ChildService } from "./child.service";
import { ChildController } from "./child.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ChildController],
  providers: [ChildService],
})
export class ChildModule {}
