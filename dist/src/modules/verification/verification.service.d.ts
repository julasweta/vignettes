import { JwtService } from '@nestjs/jwt';
import { ITokenPayload } from '../../constants/ITokenPayload.interface';
export declare class VerificationService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    decodeToken(token: string): Promise<ITokenPayload>;
    signToken(payload: ITokenPayload, time: string): Promise<string>;
    verifyToken(payload: string): Promise<any>;
}
