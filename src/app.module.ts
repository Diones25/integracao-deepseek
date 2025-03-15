import { Module } from '@nestjs/common';
import { DeepSeekModule } from './deep-seek/deep-seek.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DeepSeekModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
