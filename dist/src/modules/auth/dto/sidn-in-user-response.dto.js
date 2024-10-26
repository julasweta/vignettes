"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInUserResponsetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_base_dto_1 = require("../../users/dto/user-base.dto");
class SignInUserResponsetDto extends (0, swagger_1.PickType)(user_base_dto_1.UserBaseDto, [
    'id',
    'email',
    'first_name',
    'last_name',
    'gender',
    'role',
    'photo',
    'accessToken',
    'refreshToken',
]) {
}
exports.SignInUserResponsetDto = SignInUserResponsetDto;
//# sourceMappingURL=sidn-in-user-response.dto.js.map