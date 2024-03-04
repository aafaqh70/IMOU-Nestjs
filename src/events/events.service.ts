import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class EventsService {
  private server: Server;

  setServer(server: Server) {
    this.server = server;
  }

  handleEvent(eventPayload: any) {
    console.log('Received event:', eventPayload);

      this.server.emit('event', eventPayload);
      this.server.emit('status', 'It is working properly')
      console.log("Server is working successfully:::::::::::::::::")
    
}
}
