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
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const create_image_dto_1 = require("./dto/create-image.dto");
const update_image_dto_1 = require("./dto/update-image.dto");
const images_service_1 = require("./images.service");
const swagger_1 = require("@nestjs/swagger");
let ImageController = class ImageController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    async create(data) {
        return this.imageService.createImage(data);
    }
    async findAll() {
        return this.imageService.getAllImages();
    }
    async findOne(id) {
        return this.imageService.getImageById(id);
    }
    async update(id, data) {
        return this.imageService.updateImage(id, data);
    }
    async remove(id) {
        return this.imageService.deleteImage(id);
    }
};
exports.ImageController = ImageController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new image' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The image has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_dto_1.CreateImageDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all images' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of images',
        type: () => [create_image_dto_1.CreateImageDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an image by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The found image',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Image not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an image by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The updated image',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Image not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_image_dto_1.UpdateImageDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an image by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The deleted image',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Image not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "remove", null);
exports.ImageController = ImageController = __decorate([
    (0, swagger_1.ApiTags)('images'),
    (0, common_1.Controller)('images'),
    __metadata("design:paramtypes", [images_service_1.ImageService])
], ImageController);
//# sourceMappingURL=images.controller.js.map