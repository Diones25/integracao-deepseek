import { Body, Controller, Post } from '@nestjs/common';
import { DeepSeekService } from './deep-seek.service';
import { PromptDeepSeekDto } from './dtos/prompt-deepseek.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('chat')
export class DeepSeekController {
  constructor(private readonly deepSeekService: DeepSeekService) { }
  
  @Post('send')
  @ApiOperation({
    summary: 'Pergunta ao DeepSeek',
    description: 'Endpoint para perguntar ao DeepSeek'
  })
  @ApiResponse({
    status: 200,
    description: 'Resposta do DeepSeek',
    example: {
      response: 'A capital da Alemanha é Berlim'
    }
  })
  @ApiResponse({
    status: 400,
    description: "Falha na requisição ao DeepSeek",
    example: {
      message: "Failed to generate response from DeepSeek",
      error: "Bad Request",
      statusCode: 400
    }
  })
  async sendMessage(@Body() promptDeepSeekDto: PromptDeepSeekDto): Promise<{ response: string }> {
    const response = await this.deepSeekService.generateResponse(promptDeepSeekDto.prompt);
    return { response };
  }
}
