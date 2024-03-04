import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as CryptoJS from 'crypto-js';


@Injectable()
export class AppService {

  constructor(
    
    ) {}

  async RtmpLiveList(deviceId: string): Promise<any> {
    const apiUrl = 'https://openapi-sg.easy4ip.com:443/openapi/queryDeviceRtmpLive';

    
    const timestamp = Math.round(new Date().getTime() / 1000);
    const nonce = Math.random().toString(36).substr(2);
    const id = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  
    const appSecret = process.env.APP_SECRET;
    const sign = calcSign(timestamp, nonce, appSecret);
    const requestData = {
      system: {
        ver: process.env.VER,
        appId: process.env.APP_ID,
        sign: sign,
        time: timestamp,
        nonce: nonce,
      },
      id: id,
      params: {
        deviceId: deviceId,
        channelId: '0',
        token: "At_0000sg696c7ad7c97a49c4952e5a4ea0",
      },
    };

    try {
      const response = await axios.post(apiUrl, requestData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to bind  ' + error.message);
    }
  }

  async HlsLiveList(deviceId: string,): Promise<any> {
    const apiUrl = 'https://openapi-sg.easy4ip.com:443/openapi/getLiveStreamInfo';

    const timestamp = Math.round(new Date().getTime() / 1000);
    const nonce = Math.random().toString(36).substr(2);
    const id = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  
    const appSecret = process.env.APP_SECRET;
    const sign = calcSign(timestamp, nonce, appSecret);

    const requestData = {
      system: {
        ver: process.env.VER,
        appId: process.env.APP_ID,
        sign: sign,
        time: timestamp,
        nonce: nonce,
      },
      id: id,
      params: {
        deviceId: deviceId,
        channelId: '0',
        token: "At_0000sg696c7ad7c97a49c4952e5a4ea0",

      },
    };

    try {
      const response = await axios.post(apiUrl, requestData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to bind device live: ' + error.message);
    }

  }

}
function calcSign(timestamp: number, nonce: string, appSecret: string): string {
  const str = `time:${timestamp},nonce:${nonce},appSecret:${appSecret}`;
  const sign = CryptoJS.MD5(str).toString();
  return sign;
}