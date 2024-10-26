"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_base_dto_1 = require("../../users/dto/user-base.dto");
class CreateUserReqDto extends (0, swagger_1.PickType)(user_base_dto_1.UserBaseDto, [
    'birthday',
    'car_number',
    'email',
    'first_name',
    'last_name',
    'photo',
    'role',
    'gender',
    'password',
]) {
}
exports.CreateUserReqDto = CreateUserReqDto;
//# sourceMappingURL=create-user-request.dto.js.map