"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseMapper = void 0;
class UserResponseMapper {
    static removeInternalInf(user) {
        const resUser = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role,
            photo: user.photo,
            gender: user.gender,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
        };
        return resUser;
    }
    static arrRemoveInternalInf(users) {
        return users.map((user) => this.removeInternalInf(user));
    }
}
exports.UserResponseMapper = UserResponseMapper;
//# sourceMappingURL=user-resp-mappers.js.map