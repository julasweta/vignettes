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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPostDto) {
        const isSectionExists = await this.prisma.section.findUnique({
            where: { id: createPostDto.section_id },
        });
        if (!isSectionExists) {
            throw new common_1.NotFoundException(`Section with ID ${createPostDto.section_id} not found`);
        }
        const isCountryExists = await this.prisma.country.findUnique({
            where: { id: createPostDto.country_id },
        });
        if (!isCountryExists) {
            throw new common_1.NotFoundException(`Country with ID ${createPostDto.section_id} not found`);
        }
        const post = await this.prisma.post.create({
            data: {
                section_id: createPostDto.section_id,
                country_id: createPostDto.country_id,
            },
            include: {
                country: true,
            },
        });
        const translations = await Promise.all(createPostDto.translations.map((translation) => this.prisma.postTranslation.create({
            data: {
                ...translation,
                post_id: post.id,
            },
        })));
        const images = await Promise.all(createPostDto.images?.map((url) => this.prisma.image.create({
            data: {
                url,
                post_id: post.id,
            },
        })) || []);
        return {
            ...post,
            translations,
            images,
        };
    }
    async findAll(query) {
        console.log(query);
        try {
            const filter = {};
            if (query.section_id) {
                filter.section_id = +query.section_id;
            }
            return this.prisma.post.findMany({
                where: filter,
                include: {
                    translations: true,
                    images: true,
                    country: true,
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        const post = await this.prisma.post.findUnique({
            where: { id },
            include: {
                translations: true,
                images: true,
            },
        });
        if (!post) {
            throw new common_1.NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }
    async update(id, updatePostDto) {
        const post = await this.findOne(id);
        if (!post) {
            throw new common_1.HttpException('Post not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (updatePostDto.country_id) {
            await this.prisma.post.update({
                where: { id },
                data: { country_id: updatePostDto.country_id },
            });
        }
        if (updatePostDto.section_id) {
            await this.prisma.post.update({
                where: { id },
                data: { section_id: updatePostDto.section_id },
            });
        }
        return this.prisma.post.findUnique({
            where: { id },
            include: {
                translations: true,
                images: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.postTranslation.deleteMany({
            where: { post_id: id },
        });
        await this.prisma.image.deleteMany({
            where: { post_id: id },
        });
        return this.prisma.post.delete({
            where: { id },
            include: {
                translations: true,
                images: true,
            },
        });
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=posts.service.js.map