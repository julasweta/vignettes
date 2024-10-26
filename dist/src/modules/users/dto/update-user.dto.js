"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_base_dto_1 = require("../../users/dto/user-base.dto");
class UpdateUserDto extends (0, swagger_1.PartialType)(user_base_dto_1.UserBaseDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map