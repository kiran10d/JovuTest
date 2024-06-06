import { Module } from "@nestjs/common";
import { ReadmeService } from "./readme.service";
import { ReadmeController } from "./readme.controller";
import { ReadmeResolver } from "./readme.resolver";

@Module({
  controllers: [ReadmeController],
  providers: [ReadmeService, ReadmeResolver],
  exports: [ReadmeService],
})
export class ReadmeModule {}
