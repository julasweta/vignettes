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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let ImageService = class ImageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createImage(data) {
        return this.prisma.image.create({
            data,
        });
    }
    async getAllImages() {
        return this.prisma.image.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }
    async getImageById(id) {
        return this.prisma.image.findUnique({
            where: { id },
        });
    }
    async updateImage(id, data) {
        const existingImage = await this.prisma.image.findUnique({ where: { id } });
        if (!existingImage) {
            throw new common_1.HttpException('Image not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.prisma.image.update({
            where: { id },
            data,
        });
    }
    async deleteImage(id) {
        return this.prisma.image.delete({
            where: { id },
        });
    }
};
exports.ImageService = ImageService;
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ImageService);
//# sourceMappingURL=images.service.js.map