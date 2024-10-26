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

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  async create(
    @Body() createLanguageDto: CreateLanguageDto,
  ): Promise<Language> {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  async findAll(): Promise<Language[]> {
    return this.languagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Language | null> {
    return this.languagesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return this.languagesService.update(+id, updateLanguageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Language> {
    return this.languagesService.remove(+id);
  }
}
