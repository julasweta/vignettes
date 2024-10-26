import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { SignInUserRequestDto } from './dto/sign-in-user-request.dto';
import { SignInUserResponsetDto } from './dto/sidn-in-user-response.dto';
import { UserResponseMapper } from '../users/dto/user-resp-mappers';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //LOGIN
  @ApiOperation({ summary: 'Sign in' })
  @ApiBody({ type: SignInUserRequestDto })
  @ApiResponse({
    status: 200,
    type: SignInUserResponsetDto,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Email or password is wrong',
  })
  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  async login(
    @Body() data: SignInUserRequestDto,
    @Req() request: Request,
  ): Promise<SignInUserResponsetDto> {
    const user = request.user;
    const res = await this.authService.login(user);
    return UserResponseMapper.removeInternalInf(res);
  }

  //REFRESH
  @ApiOperation({ summary: 'Refresh token' })
  @ApiOkResponse({
    schema: {
      properties: {
        accessToken: { type: 'string' },
        refreshToken: { type: 'string' },
      },
    },
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Missing header with authorization token',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('bearer'))
  @HttpCode(200)
  @Post('/refresh')
  async refreshTokens(
    @Req() request: Request,
    @Headers('authorization') refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const user = request.user;
    const tokens = await this.authService.refreshToken(
      refreshToken.split(' ')[1],
      user,
    );
    return tokens;
  }

  //GET ME
  @ApiOperation({ summary: 'Get me' })
  @ApiResponse({ status: 200, type: SignInUserResponsetDto })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Missing header with authorization token',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('bearer'))
  @HttpCode(200)
  @Get('me')
  async getMe(@Req() request: Request): Promise<any> {
    const user = request.user;
    const me = await this.authService.getMe(user.id);
    return UserResponseMapper.removeInternalInf(me);
  }

  //LOGOUT
  @ApiOperation({ summary: 'Sign out' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: String })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Missing header with authorization token',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request' })
  @UseGuards(AuthGuard('bearer'))
  @HttpCode(200)
  @Post('logout')
  async logout(@Req() request: Request): Promise<string> {
    const user = request.user;
    await this.authService.logout(user.id);
    return 'Logout successful';
  }
}
