import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReadmeService } from "./readme.service";
import { ReadmeDto } from "../readme/ReadmeDto";

@swagger.ApiTags("readmes")
@common.Controller("readmes")
export class ReadmeController {
  constructor(protected readonly service: ReadmeService) {}

  @common.Post("/create-readme")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateReadme(
    @common.Body()
    body: ReadmeDto
  ): Promise<string> {
        return this.service.CreateReadme(body);
      }
}
