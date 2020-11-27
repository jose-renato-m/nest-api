import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

@ObjectType()
@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  @Field({ nullable: true })
  @IsOptional()
  email?: string;
}