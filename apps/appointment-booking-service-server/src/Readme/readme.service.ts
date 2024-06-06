import { Injectable } from "@nestjs/common";
import { ReadmeDto } from "../readme/ReadmeDto";

@Injectable()
export class ReadmeService {
  constructor() {}
  async CreateReadme(args: ReadmeDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
