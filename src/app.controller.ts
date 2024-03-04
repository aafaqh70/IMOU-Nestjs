import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('device')
export class AppController {
  constructor(private readonly streamService: AppService) {}

  

  @Post('GetRtmpLiveStream')
  async RtmpLive(@Body('deviceId') deviceId: string,): Promise<any> {
    return this.streamService.RtmpLiveList(deviceId);
  }

  @Post('GetHlsLiveStream')
  async HlsLive(@Body('deviceId') deviceId: string,): Promise<any> {
    return this.streamService.HlsLiveList(deviceId);
  }

  // @Post('events')
  // handleCallback(@Body() eventPayload: any) {
  //   console.log('Received event:', eventPayload);
  // }
}