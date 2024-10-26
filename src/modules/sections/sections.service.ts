import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Section } from '@prisma/client';
import { CreateSectionDto, UpdateSectionDto } from './dto/sections.dto';

@Injectable()
export class SectionsService {
  constructor(private readonly prisma: PrismaService) {}

  // У методі створення використовуйте `data: { ...createSectionDto }`
  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    return this.prisma.section.create({
      data: { ...createSectionDto }, // правильно передаємо дані
    });
  }

  async findAll(): Promise<Section[]> {
    return this.prisma.section.findMany();
  }

  async findOne(id: number): Promise<Section | null> {
    return this.prisma.section.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateSectionsDto: UpdateSectionDto,
  ): Promise<Section> {
    return this.prisma.section.update({
      where: { id },
      data: updateSectionsDto,
    });
  }

  async remove(id: number): Promise<Section> {
    return this.prisma.section.delete({
      where: { id },
    });
  }
}
