import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const allowedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!allowedRoles) {
      return true;
    }
    if (!allowedRoles.includes(user.role)) {
      throw new HttpException(' role is not allowed', HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
