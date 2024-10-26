// post.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Country, Image, Post, PostTranslation } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<
    Post & {
      translations: PostTranslation[];
      images: Image[];
      country: Country | null; // Додаємо country для включення в результат
    }
  > {
    return this.prisma.post.create({
      data: {
        section_id: createPostDto.section_id,
        country_id: createPostDto.country_id,
        translations: {
          create: createPostDto.translations,
        },
        images: {
          create:
            createPostDto.images?.map((url) => ({
              url,
            })) || [],
        },
      },
      include: {
        translations: true,
        images: true,
        country: true, // Додаємо country для включення в результат
      },
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: {
        translations: true,
        images: true,
      },
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: {
        translations: true,
        images: true,
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    // Перевіряємо чи існує пост
    await this.findOne(id);

    return this.prisma.post.update({
      where: { id },
      data: {
        translations: updatePostDto.translations
          ? {
              deleteMany: { post_id: id }, // Видаляємо старі переклади
              create: updatePostDto.translations.map((translation) => ({
                language_id: translation.language_id,
                title: translation.title,
                description: translation.description,
              })),
            }
          : undefined,
        images: updatePostDto.images
          ? {
              deleteMany: { post_id: id }, // Видаляємо старі зображення
              create: updatePostDto.images.map((url) => ({ url })),
            }
          : undefined,
      },
      include: {
        translations: true,
        images: true,
      },
    });
  }

  async remove(id: number) {
    // Перевіряємо чи існує пост
    await this.findOne(id);

    return this.prisma.post.delete({
      where: { id },
      include: {
        translations: true,
        images: true,
      },
    });
  }
}
