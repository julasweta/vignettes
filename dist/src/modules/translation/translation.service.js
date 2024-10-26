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
exports.PostTranslationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PostTranslationService = class PostTranslationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPostTranslationDto) {
        const post = await this.prisma.post.findUnique({
            where: { id: createPostTranslationDto.post_id },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${createPostTranslationDto.post_id} not found`);
        }
        const language = await this.prisma.language.findUnique({
            where: { id: createPostTranslationDto.language_id },
        });
        if (!language) {
            throw new common_1.NotFoundException(`Language with ID ${createPostTranslationDto.language_id} not found`);
        }
        return this.prisma.postTranslation.create({
            data: createPostTranslationDto,
            include: {
                post: true,
                language: true,
            },
        });
    }
    async findAll() {
        return this.prisma.postTranslation.findMany({
            include: {
                post: true,
                language: true,
            },
        });
    }
    async findOne(id) {
        const translation = await this.prisma.postTranslation.findUnique({
            where: { id },
            include: {
                post: true,
                language: true,
            },
        });
        if (!translation) {
            throw new common_1.NotFoundException(`PostTranslation with ID ${id} not found`);
        }
        return translation;
    }
    async update(id, updatePostTranslationDto) {
        await this.findOne(id);
        if (updatePostTranslationDto.post_id) {
            const post = await this.prisma.post.findUnique({
                where: { id: updatePostTranslationDto.post_id },
            });
            if (!post) {
                throw new common_1.NotFoundException(`Post with ID ${updatePostTranslationDto.post_id} not found`);
            }
        }
        if (updatePostTranslationDto.language_id) {
            const language = await this.prisma.language.findUnique({
                where: { id: updatePostTranslationDto.language_id },
            });
            if (!language) {
                throw new common_1.NotFoundException(`Language with ID ${updatePostTranslationDto.language_id} not found`);
            }
        }
        return this.prisma.postTranslation.update({
            where: { id },
            data: updatePostTranslationDto,
            include: {
                post: true,
                language: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.postTranslation.delete({
            where: { id },
            include: {
                post: true,
                language: true,
            },
        });
    }
    async findByPostId(postId) {
        return this.prisma.postTranslation.findMany({
            where: { post_id: postId },
            include: {
                language: true,
            },
        });
    }
    async findByLanguageId(languageId) {
        return this.prisma.postTranslation.findMany({
            where: { language_id: languageId },
            include: {
                post: true,
            },
        });
    }
};
exports.PostTranslationService = PostTranslationService;
exports.PostTranslationService = PostTranslationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostTranslationService);
//# sourceMappingURL=translation.service.js.map