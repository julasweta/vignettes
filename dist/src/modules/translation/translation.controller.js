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
exports.PostTranslationController = void 0;
const common_1 = require("@nestjs/common");
const translation_service_1 = require("./translation.service");
const translation_dto_1 = require("./dto/translation.dto");
const swagger_1 = require("@nestjs/swagger");
let PostTranslationController = class PostTranslationController {
    constructor(postTranslationService) {
        this.postTranslationService = postTranslationService;
    }
    create(createPostTranslationDto) {
        return this.postTranslationService.create(createPostTranslationDto);
    }
    findAll() {
        return this.postTranslationService.findAll();
    }
    findOne(id) {
        return this.postTranslationService.findOne(id);
    }
    findByPostId(postId) {
        return this.postTranslationService.findByPostId(postId);
    }
    findByLanguageId(languageId) {
        return this.postTranslationService.findByLanguageId(languageId);
    }
    update(id, updatePostTranslationDto) {
        return this.postTranslationService.update(id, updatePostTranslationDto);
    }
    remove(id) {
        return this.postTranslationService.remove(id);
    }
};
exports.PostTranslationController = PostTranslationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new post translation' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [translation_dto_1.CreatePostTranslationDto]),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all post translations' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get post translation by id' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Translation not found',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('post/:postId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get translations by post id' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)('postId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "findByPostId", null);
__decorate([
    (0, common_1.Get)('language/:languageId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get translations by language id' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Param)('languageId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "findByLanguageId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update post translation' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Translation not found',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, translation_dto_1.UpdatePostTranslationDto]),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete post translation' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Translation not found',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PostTranslationController.prototype, "remove", null);
exports.PostTranslationController = PostTranslationController = __decorate([
    (0, swagger_1.ApiTags)('post-translations'),
    (0, common_1.Controller)('post-translations'),
    __metadata("design:paramtypes", [translation_service_1.PostTranslationService])
], PostTranslationController);
//# sourceMappingURL=translation.controller.js.map