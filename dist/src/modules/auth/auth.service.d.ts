import { UsersService } from '../users/users.service';
import { VerificationService } from '../verification/verification.service';
import { SignInUserResponsetDto } from './dto/sidn-in-user-response.dto';
import { UserBaseDto } from '../users/dto/user-base.dto';
export declare class AuthService {
    private usersService;
    private readonly verificationService;
    constructor(usersService: UsersService, verificationService: VerificationService);
    login(user: Partial<SignInUserResponsetDto>): Promise<any>;
    refreshToken(refreshToken: string, user: Partial<SignInUserResponsetDto>): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getMe(id: number): Promise<Partial<UserBaseDto>>;
    logout(id: number): Promise<void>;
    validateUser(email: string, password: string): Promise<Partial<UserBaseDto>>;
}
