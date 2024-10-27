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
exports.UpdatePostTranslationDto = exports.CreatePostTranslationDto = exports.BasePostTranslationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class BasePostTranslationDto {
}
exports.BasePostTranslationDto = BasePostTranslationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID посту, до якого відноситься переклад',
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BasePostTranslationDto.prototype, "post_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID мови, на яку здійснюється переклад',
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], BasePostTranslationDto.prototype, "language_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Заголовок перекладу',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BasePostTranslationDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Опис перекладу',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BasePostTranslationDto.prototype, "description", void 0);
class CreatePostTranslationDto {
}
exports.CreatePostTranslationDto = CreatePostTranslationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID мови, на яку здійснюється переклад',
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePostTranslationDto.prototype, "language_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Заголовок перекладу',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostTranslationDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Опис перекладу',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostTranslationDto.prototype, "description", void 0);
class UpdatePostTranslationDto {
}
exports.UpdatePostTranslationDto = UpdatePostTranslationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID мови, на яку здійснюється переклад',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdatePostTranslationDto.prototype, "language_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Заголовок перекладу',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostTranslationDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Опис перекладу',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostTranslationDto.prototype, "description", void 0);
//# sourceMappingURL=translation.dto.js.map