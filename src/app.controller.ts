import { Controller, Get, Redirect, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('google-auth')
  @Redirect()
  async googleAuth(): Promise<{ url: string }> {
    return await this.appService.googleAuth();
  }
  @Get('google-callback')
  @Redirect()
  async googleAuthCallback(
    @Query('code') code: string,
  ): Promise<{ url: string }> {
    const { email, refreshToken, accessToken } =
      await this.appService.getAuthClientData(code);

    /**
     * Logic for sign in
     */
    return { url: process.env.REDIRECT_TO_LOGIN };
  }
}
