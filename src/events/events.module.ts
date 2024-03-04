import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventsGateway } from './events.gateway';

@Module({
  providers: [EventsService, EventsGateway],
  controllers: [EventsController]
})
export class EventsModule {}
