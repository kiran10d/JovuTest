import * as graphql from "@nestjs/graphql";
import { ReadmeDto } from "../readme/ReadmeDto";
import { ReadmeService } from "./readme.service";

export class ReadmeResolver {
  constructor(protected readonly service: ReadmeService) {}

  @graphql.Mutation(() => String)
  async CreateReadme(
    @graphql.Args()
    args: ReadmeDto
  ): Promise<string> {
    return this.service.CreateReadme(args);
  }
}
