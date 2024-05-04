import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { ChildModule } from "./child/child.module";

@Module({
  imports: [DatabaseModule, UserModule, ChildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
