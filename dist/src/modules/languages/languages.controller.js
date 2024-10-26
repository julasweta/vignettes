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
exports.LanguagesController = void 0;
const common_1 = require("@nestjs/common");
const languages_service_1 = require("./languages.service");
const create_language_dto_1 = require("./dto/create-language.dto");
const update_language_dto_1 = require("./dto/update-language.dto");
const swagger_1 = require("@nestjs/swagger");
let LanguagesController = class LanguagesController {
    constructor(languagesService) {
        this.languagesService = languagesService;
    }
    async create(createLanguageDto) {
        return this.languagesService.create(createLanguageDto);
    }
    async findAll() {
        return this.languagesService.findAll();
    }
    async findOne(id) {
        return this.languagesService.findOne(+id);
    }
    async update(id, updateLanguageDto) {
        return this.languagesService.update(+id, updateLanguageDto);
    }
    async remove(id) {
        return this.languagesService.remove(+id);
    }
};
exports.LanguagesController = LanguagesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Створити нову мову' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Мову успішно створено.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_language_dto_1.CreateLanguageDto]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Отримати всі мови' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Список мов.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Отримати мову за ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Мову знайдено.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Мову не знайдено.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Оновити мову за ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Мову успішно оновлено.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_language_dto_1.UpdateLanguageDto]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Видалити мову за ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Мову успішно видалено.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "remove", null);
exports.LanguagesController = LanguagesController = __decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, common_1.Controller)('languages'),
    __metadata("design:paramtypes", [languages_service_1.LanguagesService])
], LanguagesController);
//# sourceMappingURL=languages.controller.js.map