import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class PromptDeepSeekDto {

  @ApiProperty({ example: 'Qual a capital da Alemanha', description: 'Prompt para o DeepSeek' })
  @IsString({ message: 'Deve ser uma string' })
  prompt: string;
}