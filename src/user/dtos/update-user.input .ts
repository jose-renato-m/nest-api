import { InputType, ObjectType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

@ObjectType()
@InputType()
export class UpdateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Este campo não pode estar vazio' })
  @IsOptional()
  email?: string
}