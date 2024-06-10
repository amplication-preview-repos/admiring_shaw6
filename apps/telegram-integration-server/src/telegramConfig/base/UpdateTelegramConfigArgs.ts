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
import { TelegramConfigWhereUniqueInput } from "./TelegramConfigWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TelegramConfigUpdateInput } from "./TelegramConfigUpdateInput";

@ArgsType()
class UpdateTelegramConfigArgs {
  @ApiProperty({
    required: true,
    type: () => TelegramConfigWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TelegramConfigWhereUniqueInput)
  @Field(() => TelegramConfigWhereUniqueInput, { nullable: false })
  where!: TelegramConfigWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TelegramConfigUpdateInput,
  })
  @ValidateNested()
  @Type(() => TelegramConfigUpdateInput)
  @Field(() => TelegramConfigUpdateInput, { nullable: false })
  data!: TelegramConfigUpdateInput;
}

export { UpdateTelegramConfigArgs as UpdateTelegramConfigArgs };
