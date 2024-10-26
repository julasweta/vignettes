import { UserBaseDto } from '../../users/dto/user-base.dto';
declare const SignInUserResponsetDto_base: import("@nestjs/common").Type<Pick<UserBaseDto, "id" | "first_name" | "last_name" | "email" | "photo" | "gender" | "role" | "accessToken" | "refreshToken">>;
export declare class SignInUserResponsetDto extends SignInUserResponsetDto_base {
}
export {};
