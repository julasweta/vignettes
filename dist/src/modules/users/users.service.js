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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createUser(body) {
        const birth = body.birthday ? new Date(body.birthday) : null;
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: body.email },
        });
        if (existingUser) {
            throw new common_1.HttpException('User with this email already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(body.password, 10);
        return await this.prismaService.user.create({
            data: {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                car_number: body.car_number,
                photo: body.photo,
                birthday: birth,
                gender: body.gender,
                role: body.role || client_1.Role.USER,
                password: hashedPassword,
            },
        });
    }
    async getUserById(id) {
        const user = await this.prismaService.user.findUnique({
            where: { id: id },
        });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return user;
    }
    async getUserByProperty(propertyName, property) {
        const user = await this.prismaService.user.findFirst({
            where: { [propertyName]: property },
        });
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
        }
        return user;
    }
    async updateById(id, updateUserDto) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updatedUser = await this.prismaService.user.update({
            where: { id: id },
            data: updateUserDto,
        });
        const accessToken = user.accessToken;
        const refreshToken = user.refreshToken;
        return {
            ...updatedUser,
            accessToken,
            refreshToken,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map