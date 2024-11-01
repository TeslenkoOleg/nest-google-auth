import { Injectable } from '@nestjs/common';
import { GoogleService } from './google.service';

@Injectable()
export class AppService {
  constructor(private googleService: GoogleService) {}
  async googleAuth(): Promise<{ url: string }> {
    return await this.googleService.getOAuth2ClientUrl();
  }
  async getAuthClientData(
    code: string,
  ): Promise<{ email: string; refreshToken: string; accessToken: string }> {
    return await this.googleService.getAuthClientData(code);
  }
}
