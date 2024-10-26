import { Strategy } from 'passport-http-bearer';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';
declare const BearerStrategy_base: new (...args: any[]) => Strategy<import("passport-http-bearer").VerifyFunctions>;
export declare class BearerStrategy extends BearerStrategy_base {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validate(payload: string): Promise<any>;
}
export {};
