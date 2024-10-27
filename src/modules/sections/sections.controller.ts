import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { Section } from '@prisma/client'; // Імпортуємо тип Section з Prisma
import {
  CreateSectionDto,
  ResponseSectionDto,
  UpdateSectionDto,
} from './dto/sections.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sections') // Групуємо ендпоінти в категорію "sections" у Swagger
@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new section' }) // Опис для Swagger
  @ApiResponse({
    status: 201,
    description: 'The section has been successfully created.',
    type: ResponseSectionDto,
  }) // Відповідь на успішне створення
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Відповідь на помилку
  async create(@Body() createSectionDto: CreateSectionDto): Promise<Section> {
    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sections' }) // Опис для Swagger
  @ApiResponse({
    status: 200,
    description: 'List of sections',
    type: [ResponseSectionDto],
  }) // Відповідь на запит списку
  async findAll(): Promise<Section[]> {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a section by ID' }) // Опис для Swagger
  @ApiResponse({
    status: 200,
    description: 'The section found',
    type: ResponseSectionDto,
  }) // Відповідь на успішний запит
  @ApiResponse({ status: 404, description: 'Section not found' }) // Відповідь на помилку
  async findOne(@Param('id') id: string): Promise<Section | null> {
    return this.sectionsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a section' }) // Опис для Swagger
  @ApiResponse({
    status: 200,
    description: 'The section has been successfully updated.',
    type: ResponseSectionDto,
  }) // Відповідь на успішне оновлення
  @ApiResponse({ status: 404, description: 'Section not found' }) // Відповідь на помилку
  async update(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
  ): Promise<Section> {
    return this.sectionsService.update(+id, updateSectionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a section' }) // Опис для Swagger
  @ApiResponse({
    status: 200,
    description: 'The section has been successfully deleted.',
    type: String,
  }) // Відповідь на успішне видалення
  @ApiResponse({ status: 404, description: 'Section not found' }) // Відповідь на помилку
  async remove(@Param('id') id: string): Promise<string> {
    return this.sectionsService.remove(+id);
  }
}
