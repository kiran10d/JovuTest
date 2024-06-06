/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Staff } from "./Staff";
import { StaffCountArgs } from "./StaffCountArgs";
import { StaffFindManyArgs } from "./StaffFindManyArgs";
import { StaffFindUniqueArgs } from "./StaffFindUniqueArgs";
import { CreateStaffArgs } from "./CreateStaffArgs";
import { UpdateStaffArgs } from "./UpdateStaffArgs";
import { DeleteStaffArgs } from "./DeleteStaffArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { StaffService } from "../staff.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Staff)
export class StaffResolverBase {
  constructor(
    protected readonly service: StaffService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "read",
    possession: "any",
  })
  async _staffItemsMeta(
    @graphql.Args() args: StaffCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Staff])
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "read",
    possession: "any",
  })
  async staffItems(@graphql.Args() args: StaffFindManyArgs): Promise<Staff[]> {
    return this.service.staffItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Staff, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "read",
    possession: "own",
  })
  async staff(
    @graphql.Args() args: StaffFindUniqueArgs
  ): Promise<Staff | null> {
    const result = await this.service.staff(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Staff)
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "create",
    possession: "any",
  })
  async createStaff(@graphql.Args() args: CreateStaffArgs): Promise<Staff> {
    return await this.service.createStaff({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Staff)
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "update",
    possession: "any",
  })
  async updateStaff(
    @graphql.Args() args: UpdateStaffArgs
  ): Promise<Staff | null> {
    try {
      return await this.service.updateStaff({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Staff)
  @nestAccessControl.UseRoles({
    resource: "Staff",
    action: "delete",
    possession: "any",
  })
  async deleteStaff(
    @graphql.Args() args: DeleteStaffArgs
  ): Promise<Staff | null> {
    try {
      return await this.service.deleteStaff(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Appointment], { name: "appointments" })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @graphql.Parent() parent: Staff,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
