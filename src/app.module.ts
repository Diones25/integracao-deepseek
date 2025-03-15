import { Module } from '@nestjs/common';
import { DeepSeekModule } from './deep-seek/deep-seek.module';

@Module({
  imports: [DeepSeekModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
