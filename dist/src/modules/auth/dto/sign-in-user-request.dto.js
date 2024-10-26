"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInUserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_base_dto_1 = require("../../users/dto/user-base.dto");
class SignInUserRequestDto extends (0, swagger_1.PickType)(user_base_dto_1.UserBaseDto, [
    'email',
    'password',
]) {
}
exports.SignInUserRequestDto = SignInUserRequestDto;
//# sourceMappingURL=sign-in-user-request.dto.js.map