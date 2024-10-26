import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ITokenPayload } from '../../constants/ITokenPayload.interface';
// import { AccessToken } from 'src/types/ITokens';

@Injectable()
export class VerificationService {
  constructor(private readonly jwtService: JwtService) {}

  async decodeToken(token: string): Promise<ITokenPayload> {
    try {
      return this.jwtService.decode(token);
    } catch (err) {
      throw new BadRequestException('Bad request');
    }
  }

  async signToken(payload: ITokenPayload, time: string): Promise<string> {
    try {
      const authToken = this.jwtService.sign(payload, { expiresIn: time });
      return authToken;
    } catch (err) {
      throw new BadRequestException(`${err.message}`);
    }
  }

  async verifyToken(payload: string) {
    try {
      return await this.jwtService.verifyAsync(payload);
    } catch (error) {
      throw new HttpException(error.name, HttpStatus.REQUEST_TIMEOUT);
    }
  }
}
