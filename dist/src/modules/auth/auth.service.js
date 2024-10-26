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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const verification_service_1 = require("../verification/verification.service");
const tokensEnum_1 = require("../../constants/tokensEnum");
let AuthService = class AuthService {
    constructor(usersService, verificationService) {
        this.usersService = usersService;
        this.verificationService = verificationService;
    }
    async login(user) {
        const { id, role } = user;
        const accessToken = await this.verificationService.signToken({
            id,
            role,
            type: tokensEnum_1.TokensEnum.ACCESS,
        }, '50m');
        const refreshToken = await this.verificationService.signToken({
            id,
            role,
            type: tokensEnum_1.TokensEnum.REFRESH,
        }, '10h');
        await this.usersService.updateById(id, {
            accessToken: accessToken,
            refreshToken: refreshToken,
        });
        const userFind = await this.usersService.getUserById(id);
        return userFind;
    }
    async refreshToken(refreshToken, user) {
        const { id, role } = user;
        const accessToken = await this.verificationService.signToken({
            id,
            role,
            type: tokensEnum_1.TokensEnum.ACCESS,
        }, '15m');
        await this.usersService.updateById(user.id, {
            accessToken: accessToken,
            refreshToken: refreshToken,
        });
        return { accessToken, refreshToken };
    }
    async getMe(id) {
        const user = await this.usersService.getUserById(id);
        return user;
    }
    async logout(id) {
        await this.usersService.updateById(id, {
            accessToken: null,
            refreshToken: null,
        });
    }
    async validateUser(email, password) {
        const user = await this.usersService.getUserByProperty('email', email);
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            throw new common_1.HttpException('Email or password is wrong', common_1.HttpStatus.BAD_REQUEST);
        }
        if (user && comparePassword) {
            return user;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        verification_service_1.VerificationService])
], AuthService);
//# sourceMappingURL=auth.service.js.map