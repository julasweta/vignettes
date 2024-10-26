import { AuthService } from './auth.service';
import { Request } from 'express';
import { SignInUserRequestDto } from './dto/sign-in-user-request.dto';
import { SignInUserResponsetDto } from './dto/sidn-in-user-response.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: SignInUserRequestDto, request: Request): Promise<SignInUserResponsetDto>;
    refreshTokens(request: Request, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getMe(request: Request): Promise<any>;
    logout(request: Request): Promise<string>;
}
