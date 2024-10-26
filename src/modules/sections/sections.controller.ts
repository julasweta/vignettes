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
import { Section } from '@prisma/client'; // Імпортуємо тип Language з Prisma
import { CreateSectionDto, UpdateSectionDto } from './dto/sections.dto';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  async create(@Body() createLanguageDto: CreateSectionDto): Promise<Section> {
    return this.sectionsService.create(createLanguageDto);
  }

  @Get()
  async findAll(): Promise<Section[]> {
    return this.sectionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Section | null> {
    return this.sectionsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateSectionDto,
  ): Promise<Section> {
    return this.sectionsService.update(+id, updateLanguageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Section> {
    return this.sectionsService.remove(+id);
  }
}
