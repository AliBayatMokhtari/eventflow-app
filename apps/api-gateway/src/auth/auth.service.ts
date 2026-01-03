import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { SERVICES_PORTS } from '@app/common';

@Injectable()
export class AuthService {
  private readonly authServiceUrl = `http://localhost:${SERVICES_PORTS.AUTH_SERVICE}`;

  constructor(private readonly httpService: HttpService) {}

  async register(data: { email: string; password: string; name: string }) {
    try {
      const url = `${this.authServiceUrl}/register`;
      const response = await firstValueFrom(this.httpService.post(url, data));

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async login(data: { email: string; password: string }) {
    try {
      const url = `${this.authServiceUrl}/login`;
      const response = await firstValueFrom(this.httpService.post(url, data));

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getProfile(token: string) {
    try {
      const url = `${this.authServiceUrl}/profile`;
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { Authorization: token },
        }),
      );

      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    if (error.response) {
      throw new HttpException(error.response.data, error.response.status);
    }

    throw new HttpException('Something went wrong', 503);
  }
}
