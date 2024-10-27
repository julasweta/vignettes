import { Injectable, NotFoundException } from '@nestjs/common'; // Імплементуємо NotFoundException
import { PrismaService } from '../../../prisma/prisma.service';
import { Section } from '@prisma/client';
import { CreateSectionDto, UpdateSectionDto } from './dto/sections.dto';

@Injectable()
export class SectionsService {
  constructor(private readonly prisma: PrismaService) {}

  // Метод для створення нової секції
  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    return this.prisma.section.create({
      data: { ...createSectionDto }, // правильно передаємо дані
    });
  }

  // Метод для отримання всіх секцій
  async findAll(): Promise<Section[]> {
    return this.prisma.section.findMany();
  }

  // Метод для отримання секції за ID
  async findOne(id: number): Promise<Section> {
    const section = await this.prisma.section.findUnique({
      where: { id },
    });

    // Якщо секція не знайдена, генеруємо виключення
    if (!section) {
      throw new NotFoundException(`Section with ID ${id} not found`);
    }

    return section;
  }

  // Метод для оновлення секції
  async update(
    id: number,
    updateSectionDto: UpdateSectionDto,
  ): Promise<Section> {
    const section = await this.findOne(id); // Перевіряємо наявність секції

    return this.prisma.section.update({
      where: { id: section.id }, // Використовуємо знайдений ID
      data: updateSectionDto,
    });
  }

  // Метод для видалення секції
  async remove(id: number): Promise<string> {
    const section = await this.findOne(id); // Перевіряємо наявність секції

    this.prisma.section.delete({
      where: { id: section.id }, // Використовуємо знайдений ID
    });
    return `Section with ID ${id} delete`;
  }
}
