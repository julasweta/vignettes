import { UserBaseDto } from '../../users/dto/user-base.dto';
declare const CreateUserReqDto_base: import("@nestjs/common").Type<Pick<UserBaseDto, "first_name" | "last_name" | "email" | "car_number" | "photo" | "birthday" | "gender" | "role" | "password">>;
export declare class CreateUserReqDto extends CreateUserReqDto_base {
}
export {};
