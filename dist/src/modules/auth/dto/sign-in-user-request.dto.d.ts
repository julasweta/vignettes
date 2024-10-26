import { UserBaseDto } from '../../users/dto/user-base.dto';
declare const SignInUserRequestDto_base: import("@nestjs/common").Type<Pick<UserBaseDto, "email" | "password">>;
export declare class SignInUserRequestDto extends SignInUserRequestDto_base {
}
export {};
