import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { VerificationService } from '../verification/verification.service';
import { TokensEnum } from '../../constants/tokensEnum';
import { SignInUserResponsetDto } from './dto/sidn-in-user-response.dto';
import { UserBaseDto } from '../users/dto/user-base.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly verificationService: VerificationService,
  ) {}
  async login(user: Partial<SignInUserResponsetDto>): Promise<any> {
    const { id, role } = user;
    const accessToken = await this.verificationService.signToken(
      {
        id,
        role,
        type: TokensEnum.ACCESS,
      },
      '50m',
    );
    const refreshToken = await this.verificationService.signToken(
      {
        id,
        role,
        type: TokensEnum.REFRESH,
      },
      '10h',
    );

    await this.usersService.updateById(id, {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    const userFind = await this.usersService.getUserById(id);
    return userFind;
  }

  async refreshToken(
    refreshToken: string,
    user: Partial<SignInUserResponsetDto>,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const { id, role } = user;

    const accessToken = await this.verificationService.signToken(
      {
        id,
        role,
        type: TokensEnum.ACCESS,
      },
      '15m',
    );

    await this.usersService.updateById(user.id, {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });

    return { accessToken, refreshToken };
  }

  async getMe(id: number) {
    const user = await this.usersService.getUserById(id);
    return user;
  }

  async logout(id: number): Promise<void> {
    await this.usersService.updateById(id, {
      accessToken: null,
      refreshToken: null,
    });
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Partial<UserBaseDto>> {
    const user = await this.usersService.getUserByProperty('email', email);

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      throw new HttpException(
        'Email or password is wrong',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (user && comparePassword) {
      return user;
    }

    return null;
  }
}
