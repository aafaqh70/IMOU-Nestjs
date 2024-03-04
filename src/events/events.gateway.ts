import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventsService } from './events.service';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() 
  server: Server;

  constructor(
    private readonly eventsService: EventsService
    ) {}

  afterInit() {
    this.eventsService.setServer(this.server);
  }

  
}