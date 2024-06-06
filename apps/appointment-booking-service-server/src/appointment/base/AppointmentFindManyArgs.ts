/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentWhereInput } from "./AppointmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AppointmentOrderByInput } from "./AppointmentOrderByInput";

@ArgsType()
class AppointmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AppointmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AppointmentWhereInput, { nullable: true })
  @Type(() => AppointmentWhereInput)
  where?: AppointmentWhereInput;

  @ApiProperty({
    required: false,
    type: [AppointmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AppointmentOrderByInput], { nullable: true })
  @Type(() => AppointmentOrderByInput)
  orderBy?: Array<AppointmentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AppointmentFindManyArgs as AppointmentFindManyArgs };
