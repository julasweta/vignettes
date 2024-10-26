import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from '@prisma/client'; // Імпортуємо тип Language з Prisma
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('languages') // Тег для групування ендпоінтів
@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  @ApiOperation({ summary: 'Створити нову мову' }) // Опис методу
  @ApiResponse({
    status: 201,
    description: 'Мову успішно створено.',
  }) // Відповідь при успішному створенні
  async create(
    @Body() createLanguageDto: CreateLanguageDto,
  ): Promise<Language> {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Отримати всі мови' }) // Опис методу
  @ApiResponse({ status: 200, description: 'Список мов.' }) // Відповідь при отриманні всіх мов
  async findAll(): Promise<Language[]> {
    return this.languagesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримати мову за ID' }) // Опис методу
  @ApiResponse({ status: 200, description: 'Мову знайдено.' }) // Відповідь при успішному знаходженні
  @ApiResponse({ status: 404, description: 'Мову не знайдено.' }) // Відповідь при невдачі
  async findOne(@Param('id') id: string): Promise<Language | null> {
    return this.languagesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Оновити мову за ID' }) // Опис методу
  @ApiResponse({
    status: 200,
    description: 'Мову успішно оновлено.',
  }) // Відповідь при успішному оновленні
  async update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return this.languagesService.update(+id, updateLanguageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Видалити мову за ID' }) // Опис методу
  @ApiResponse({
    status: 200,
    description: 'Мову успішно видалено.',
  }) // Відповідь при успішному видаленні
  async remove(@Param('id') id: string): Promise<Language> {
    return this.languagesService.remove(+id);
  }
}
