// post-translation.service.ts
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  BasePostTranslationDto,
  UpdatePostTranslationDto,
} from './dto/translation.dto';
import { PostTranslation } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostTranslationService {
  constructor(private prisma: PrismaService) {}

  async create(
    createPostTranslationDto: BasePostTranslationDto,
  ): Promise<PostTranslation> {
    // Перевіряємо, чи існує пост
    const post = await this.prisma.post.findUnique({
      where: { id: createPostTranslationDto.post_id },
    });

    if (!post) {
      throw new NotFoundException(
        `Post with ID ${createPostTranslationDto.post_id} not found`,
      );
    }

    // Перевіряємо, чи існує мова
    const language = await this.prisma.language.findUnique({
      where: { id: createPostTranslationDto.language_id },
    });

    if (!language) {
      throw new NotFoundException(
        `Language with ID ${createPostTranslationDto.language_id} not found`,
      );
    }

    // Перевіряємо, чи вже існує переклад з такою ж комбінацією post_id та language_id
    const existingTranslation = await this.prisma.postTranslation.findFirst({
      where: {
        post_id: createPostTranslationDto.post_id,
        language_id: createPostTranslationDto.language_id,
      },
    });

    if (existingTranslation) {
      throw new HttpException(
        `Translation already exists for post ID ${createPostTranslationDto.post_id} and language ID ${createPostTranslationDto.language_id}`,
        HttpStatus.CONFLICT,
      );
    }

    // Створюємо новий переклад
    return this.prisma.postTranslation.create({
      data: createPostTranslationDto,
      include: {
        post: true,
        language: true,
      },
    });
  }

  async findAll(): Promise<PostTranslation[]> {
    return this.prisma.postTranslation.findMany({
      include: {
        post: true,
        language: true,
      },
    });
  }

  async findOne(id: number): Promise<PostTranslation> {
    const translation = await this.prisma.postTranslation.findUnique({
      where: { id },
      include: {
        post: true,
        language: true,
      },
    });

    if (!translation) {
      throw new NotFoundException(`PostTranslation with ID ${id} not found`);
    }

    return translation;
  }

  async update(
    id: number,
    updatePostTranslationDto: UpdatePostTranslationDto,
  ): Promise<PostTranslation> {
    // Перевіряємо, чи існує переклад
    const existingTranslation = await this.findOne(id);

    if (!existingTranslation) {
      throw new NotFoundException(`Translation with ID ${id} not found`);
    }

    // Отримуємо post_id з існуючого перекладу
    const postId = existingTranslation.post_id;

    // Перевіряємо, якщо переданий language_id, чи вже існує така комбінація з post_id
    if (updatePostTranslationDto.language_id) {
      const existingPostTranslation =
        await this.prisma.postTranslation.findFirst({
          where: {
            post_id: postId, // Використовуємо post_id з існуючого перекладу
            language_id: updatePostTranslationDto.language_id,
          },
        });

      if (existingPostTranslation && existingPostTranslation.id !== id) {
        throw new HttpException(
          `Translation already exists for post ID ${postId} and language ID ${updatePostTranslationDto.language_id}`,
          HttpStatus.CONFLICT,
        );
      }
    }

    // Оновлюємо лише поля, що присутні в DTO
    const updatedTranslation = await this.prisma.postTranslation.update({
      where: { id },
      data: {
        language_id:
          updatePostTranslationDto.language_id ??
          existingTranslation.language_id,
        title: updatePostTranslationDto.title ?? existingTranslation.title,
        description:
          updatePostTranslationDto.description ??
          existingTranslation.description,
      },
    });

    return updatedTranslation;
  }

  async remove(id: number): Promise<PostTranslation> {
    // Перевіряємо чи існує переклад
    await this.findOne(id);

    return this.prisma.postTranslation.delete({
      where: { id },
      include: {
        post: true,
        language: true,
      },
    });
  }

  async findByPostId(postId: number): Promise<PostTranslation[]> {
    return this.prisma.postTranslation.findMany({
      where: { post_id: postId },
      include: {
        language: true,
      },
    });
  }

  async findByLanguageId(languageId: number): Promise<PostTranslation[]> {
    return this.prisma.postTranslation.findMany({
      where: { language_id: languageId },
      include: {
        post: true,
      },
    });
  }
}
