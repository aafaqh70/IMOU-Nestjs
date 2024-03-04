import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [EventsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
