import { Module } from '@nestjs/common';
import { DeepSeekService } from './deep-seek.service';
import { DeepSeekController } from './deep-seek.controller';

@Module({
  providers: [DeepSeekService],
  controllers: [DeepSeekController]
})
export class DeepSeekModule {}
