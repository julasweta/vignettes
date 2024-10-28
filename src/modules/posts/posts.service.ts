// post.service.ts
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreatePostDto,
  PostListQuerytDto,
  UpdatePostDto,
} from './dto/post.dto';
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
    const isSectionExists = await this.prisma.section.findUnique({
      where: { id: createPostDto.section_id },
    });

    if (!isSectionExists) {
      throw new NotFoundException(
        `Section with ID ${createPostDto.section_id} not found`,
      );
    }

    const isCountryExists = await this.prisma.country.findUnique({
      where: { id: createPostDto.country_id },
    });

    if (!isCountryExists) {
      throw new NotFoundException(
        `Country with ID ${createPostDto.section_id} not found`,
      );
    }

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

  async findAll(query: PostListQuerytDto) {
    console.log(query);
    try {
      const filter: Record<string, any> = {};

      // Додаємо фільтр за секцією, якщо він переданий в запиті
      if (query.section_id) {
        filter.section_id = +query.section_id; // Використовуємо `sectionId` для фільтрації за ID секції
      }

      // Повертаємо всі пости з фільтрацією
      return this.prisma.post.findMany({
        where: filter,
        include: {
          translations: true,
          images: true,
          country: true,
        },
      });
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
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

  /* translation, images змінється кожне окремо через їхні методі update by id */
  async update(id: number, updatePostDto: UpdatePostDto) {
    // Перевіряємо, чи існує пост
    const post = await this.findOne(id);

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    // Оновлюємо поля країни та секції, якщо передані
    if (updatePostDto.country_id) {
      await this.prisma.post.update({
        where: { id },
        data: { country_id: updatePostDto.country_id },
      });
    }

    if (updatePostDto.section_id) {
      await this.prisma.post.update({
        where: { id },
        data: { section_id: updatePostDto.section_id },
      });
    }

    // Повертаємо оновлений пост
    return this.prisma.post.findUnique({
      where: { id },
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
