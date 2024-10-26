import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserBaseDto } from '../../users/dto/user-base.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(
    email: string,
    password: string,
  ): Promise<Partial<UserBaseDto>> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Credentials incorrect');
    }

    // Повертаємо частковий об'єкт користувача для використання у контролері
    return {
      id: user.id,
      first_name: user.first_name,
      role: user.role,
    };
  }
}
