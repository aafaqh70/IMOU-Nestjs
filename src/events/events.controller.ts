import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
    constructor(
        private readonly eventsService: EventsService
    ) {}

    @Post()
  handleCallback(@Body() eventPayload: any) {
    this.eventsService.handleEvent(eventPayload);
  }
}
