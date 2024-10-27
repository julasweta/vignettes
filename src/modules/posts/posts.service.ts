// post.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Country, Image, Post, PostTranslation } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // post.service.ts
  async create(createPostDto: CreatePostDto): Promise<
    Post & {
      translations: PostTranslation[];
      images: Image[];
      country: Country | null;
    }
  > {
    // 1. Створюємо основний пост і отримуємо його ID
    const post = await this.prisma.post.create({
      data: {
        section_id: createPostDto.section_id,
        country_id: createPostDto.country_id,
      },
      include: {
        country: true,
      },
    });

    // 2. Додаємо переклади та зображення, використовуючи `post.id`
    const translations = await Promise.all(
      createPostDto.translations.map((translation) =>
        this.prisma.postTranslation.create({
          data: {
            ...translation,
            post_id: post.id, // Встановлюємо post_id для кожного перекладу
          },
        }),
      ),
    );

    const images = await Promise.all(
      createPostDto.images?.map((url) =>
        this.prisma.image.create({
          data: {
            url,
            post_id: post.id, // Встановлюємо post_id для кожного зображення
          },
        }),
      ) || [],
    );

    // Повертаємо пост разом із пов'язаними перекладами та зображеннями
    return {
      ...post,
      translations,
      images,
    };
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
              deleteMany: { post_id: id },
              create: updatePostDto.translations.map((translation) => ({
                language_id: translation.language_id,
                title: translation.title,
                description: translation.description,
              })),
            }
          : undefined,
        images: updatePostDto.images
          ? {
              deleteMany: { post_id: id },
              create: updatePostDto.images.map((url) => ({ url })),
            }
          : undefined,
        country_id: updatePostDto.country_id,
        section_id: updatePostDto.section_id,
      },
      include: {
        translations: true,
        images: true,
      },
    });
  }

  async remove(id: number) {
    // Перевіряємо, чи існує пост
    await this.findOne(id);

    // Видаляємо всі пов'язані переклади
    await this.prisma.postTranslation.deleteMany({
      where: { post_id: id },
    });

    // Видаляємо всі пов'язані зображення (якщо потрібно)
    await this.prisma.image.deleteMany({
      where: { post_id: id },
    });

    // Тепер видаляємо пост
    return this.prisma.post.delete({
      where: { id },
      include: {
        translations: true,
        images: true,
      },
    });
  }
}
