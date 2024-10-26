import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { ExtractJwt } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: string) {
    try {
      if (!payload) {
        throw new UnauthorizedException('bearer error');
      }

      await this.jwtService.verifyAsync(payload);
      const decodeToken = this.jwtService.decode(payload);
      if (
        !(await this.usersService.getUserByProperty(decodeToken.type, payload))
      ) {
        throw new UnauthorizedException('bearer error');
      }
      return decodeToken;
    } catch (error) {
      throw new UnauthorizedException('Invalid token or token expired');
    }
  }
}
