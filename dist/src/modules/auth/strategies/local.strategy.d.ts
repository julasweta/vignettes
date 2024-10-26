import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserBaseDto } from '../../users/dto/user-base.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<Partial<UserBaseDto>>;
}
export {};
