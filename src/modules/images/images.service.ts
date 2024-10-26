import { Injectable } from '@nestjs/common';
import { Image } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(private readonly prisma: PrismaService) {}

  // Створення нового зображення
  async createImage(data: {
    url: string;
    post_id?: number;
    country_id?: number;
  }): Promise<Image> {
    return this.prisma.image.create({
      data,
    });
  }

  // Отримання всіх зображень
  async getAllImages(): Promise<Image[]> {
    return this.prisma.image.findMany();
  }

  // Отримання зображення за ID
  async getImageById(id: number): Promise<Image | null> {
    return this.prisma.image.findUnique({
      where: { id },
    });
  }

  // Оновлення зображення
  async updateImage(
    id: number,
    data: { url?: string; post_id?: number; country_id?: number },
  ): Promise<Image> {
    return this.prisma.image.update({
      where: { id },
      data,
    });
  }

  // Видалення зображення
  async deleteImage(id: number): Promise<Image> {
    return this.prisma.image.delete({
      where: { id },
    });
  }
}
