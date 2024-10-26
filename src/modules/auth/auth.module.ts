import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { BearerStrategy } from './strategies/bearer.strategy';
import { UsersModule } from '../users/users.module';
import { VerificationService } from '../verification/verification.service';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PassportModule.register({
      property: 'user',
      session: true,
      defaultStrategy: 'local',
    }),
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '24h',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    BearerStrategy,
    LocalStrategy,
    PrismaService,
    UsersService,
    VerificationService,
  ],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
