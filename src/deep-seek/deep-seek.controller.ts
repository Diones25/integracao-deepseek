import { Body, Controller, Post } from '@nestjs/common';
import { DeepSeekService } from './deep-seek.service';
import { PromptDeepSeekDto } from './dtos/prompt-deepseek.dto';

@Controller('chat')
export class DeepSeekController {
  constructor(private readonly deepSeekService: DeepSeekService) { }
  
  @Post('send')
  async sendMessage(@Body() promptDeepSeekDto: PromptDeepSeekDto): Promise<{ response: string }> {
    const response = await this.deepSeekService.generateResponse(promptDeepSeekDto.prompt);
    return { response };
  }
}
