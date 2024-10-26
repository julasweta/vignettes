import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from '@prisma/client'; // Імпортуємо тип Language
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class LanguagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLanguageDto: CreateLanguageDto): Promise<Language> {
    return this.prisma.language.create({
      data: createLanguageDto,
    });
  }

  async findAll(): Promise<Language[]> {
    return this.prisma.language.findMany();
  }

  async findOne(id: number): Promise<Language | null> {
    return this.prisma.language.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return this.prisma.language.update({
      where: { id },
      data: updateLanguageDto,
    });
  }

  async remove(id: number): Promise<Language> {
    return this.prisma.language.delete({
      where: { id },
    });
  }
}
