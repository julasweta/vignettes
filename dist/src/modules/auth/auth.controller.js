"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const sign_in_user_request_dto_1 = require("./dto/sign-in-user-request.dto");
const sidn_in_user_response_dto_1 = require("./dto/sidn-in-user-response.dto");
const user_resp_mappers_1 = require("../users/dto/user-resp-mappers");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(data, request) {
        const user = request.user;
        const res = await this.authService.login(user);
        return user_resp_mappers_1.UserResponseMapper.removeInternalInf(res);
    }
    async refreshTokens(request, refreshToken) {
        const user = request.user;
        const tokens = await this.authService.refreshToken(refreshToken.split(' ')[1], user);
        return tokens;
    }
    async getMe(request) {
        const user = request.user;
        const me = await this.authService.getMe(user.id);
        return user_resp_mappers_1.UserResponseMapper.removeInternalInf(me);
    }
    async logout(request) {
        const user = request.user;
        await this.authService.logout(user.id);
        return 'Logout successful';
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Sign in' }),
    (0, swagger_1.ApiBody)({ type: sign_in_user_request_dto_1.SignInUserRequestDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: sidn_in_user_response_dto_1.SignInUserResponsetDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        status: 400,
        description: 'Email or password is wrong',
    }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_user_request_dto_1.SignInUserRequestDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Refresh token' }),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            properties: {
                accessToken: { type: 'string' },
                refreshToken: { type: 'string' },
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: 401,
        description: 'Missing header with authorization token',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('bearer')),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/refresh'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get me' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: sidn_in_user_response_dto_1.SignInUserResponsetDto }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: 401,
        description: 'Missing header with authorization token',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('bearer')),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Sign out' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: String }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        status: 401,
        description: 'Missing header with authorization token',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('bearer')),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map