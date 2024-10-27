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
exports.PostListQuerytDto = exports.PostResponse = exports.UpdatePostDto = exports.CreatePostDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const translation_dto_1 = require("../../translation/dto/translation.dto");
const create_image_dto_1 = require("../../images/dto/create-image.dto");
const countries_dto_1 = require("../../countries/dto/countries.dto");
class CreatePostDto {
}
exports.CreatePostDto = CreatePostDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID країни, до якої відноситься пост',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID секції, до якої відноситься пост',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePostDto.prototype, "section_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [translation_dto_1.CreatePostTranslationDto],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "translations", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Зображення поста',
        type: [String],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreatePostDto.prototype, "images", void 0);
class UpdatePostDto {
}
exports.UpdatePostDto = UpdatePostDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Країни id',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePostDto.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Section id',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePostDto.prototype, "section_id", void 0);
class PostResponse {
}
exports.PostResponse = PostResponse;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID поста',
    }),
    __metadata("design:type", Number)
], PostResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PostResponse.prototype, "country_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PostResponse.prototype, "section_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Переклади поста',
        type: [translation_dto_1.CreatePostTranslationDto],
    }),
    __metadata("design:type", Array)
], PostResponse.prototype, "translations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Країна',
        type: [countries_dto_1.CountryDto],
    }),
    __metadata("design:type", Array)
], PostResponse.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Зображення поста',
        type: [create_image_dto_1.CreateImageDto],
    }),
    __metadata("design:type", Array)
], PostResponse.prototype, "images", void 0);
class PostListQuerytDto {
}
exports.PostListQuerytDto = PostListQuerytDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PostListQuerytDto.prototype, "section_id", void 0);
//# sourceMappingURL=post.dto.js.map