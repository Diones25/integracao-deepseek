import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class DeepSeekService {
  private readonly apiKey: string | undefined;
  private readonly baseUrl: string = 'https://api.deepseek.com';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('DEEPSEEK_API_KEY');
  }

  async generateResponse(prompt: string) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    const data = {
      model: "deepseek-chat",
      messages: [{ role: 'user', content: prompt }] 
    }

    try {
      const response = await axios.post(`${this.baseUrl}/chat/completions`, data, { headers });
      return response.data;
    } catch (error) {
      throw new BadRequestException(`Erro ao enviar mensagem para DeepSeek: ${error.message}`);
    }
  }
}
