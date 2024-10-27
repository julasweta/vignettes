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
exports.SectionsController = void 0;
const common_1 = require("@nestjs/common");
const sections_service_1 = require("./sections.service");
const sections_dto_1 = require("./dto/sections.dto");
const swagger_1 = require("@nestjs/swagger");
let SectionsController = class SectionsController {
    constructor(sectionsService) {
        this.sectionsService = sectionsService;
    }
    async create(createSectionDto) {
        return this.sectionsService.create(createSectionDto);
    }
    async findAll() {
        return this.sectionsService.findAll();
    }
    async findOne(id) {
        return this.sectionsService.findOne(+id);
    }
    async update(id, updateSectionDto) {
        return this.sectionsService.update(+id, updateSectionDto);
    }
    async remove(id) {
        return this.sectionsService.remove(+id);
    }
};
exports.SectionsController = SectionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new section' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The section has been successfully created.',
        type: sections_dto_1.ResponseSectionDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sections_dto_1.CreateSectionDto]),
    __metadata("design:returntype", Promise)
], SectionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sections' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of sections',
        type: [sections_dto_1.ResponseSectionDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SectionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a section by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The section found',
        type: sections_dto_1.ResponseSectionDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a section' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The section has been successfully updated.',
        type: sections_dto_1.ResponseSectionDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sections_dto_1.UpdateSectionDto]),
    __metadata("design:returntype", Promise)
], SectionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a section' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The section has been successfully deleted.',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Section not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SectionsController.prototype, "remove", null);
exports.SectionsController = SectionsController = __decorate([
    (0, swagger_1.ApiTags)('sections'),
    (0, common_1.Controller)('sections'),
    __metadata("design:paramtypes", [sections_service_1.SectionsService])
], SectionsController);
//# sourceMappingURL=sections.controller.js.map