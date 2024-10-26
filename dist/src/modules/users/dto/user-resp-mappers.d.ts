import { SignInUserResponsetDto } from '../../auth/dto/sidn-in-user-response.dto';
import { UserBaseDto } from './user-base.dto';
export declare class UserResponseMapper {
    static removeInternalInf(user: Partial<UserBaseDto>): SignInUserResponsetDto;
    static arrRemoveInternalInf(users: Partial<UserBaseDto>[]): SignInUserResponsetDto[];
}
