// post-translation.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
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
    // Перевіряємо чи існує пост
    const post = await this.prisma.post.findUnique({
      where: { id: createPostTranslationDto.post_id },
    });

    if (!post) {
      throw new NotFoundException(
        `Post with ID ${createPostTranslationDto.post_id} not found`,
      );
    }

    // Перевіряємо чи існує мова
    const language = await this.prisma.language.findUnique({
      where: { id: createPostTranslationDto.language_id },
    });

    if (!language) {
      throw new NotFoundException(
        `Language with ID ${createPostTranslationDto.language_id} not found`,
      );
    }

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
    // Перевіряємо чи існує переклад
    await this.findOne(id);

    // Якщо змінюється post_id, перевіряємо чи існує новий пост
    if (updatePostTranslationDto.post_id) {
      const post = await this.prisma.post.findUnique({
        where: { id: updatePostTranslationDto.post_id },
      });

      if (!post) {
        throw new NotFoundException(
          `Post with ID ${updatePostTranslationDto.post_id} not found`,
        );
      }
    }

    // Якщо змінюється language_id, перевіряємо чи існує нова мова
    if (updatePostTranslationDto.language_id) {
      const language = await this.prisma.language.findUnique({
        where: { id: updatePostTranslationDto.language_id },
      });

      if (!language) {
        throw new NotFoundException(
          `Language with ID ${updatePostTranslationDto.language_id} not found`,
        );
      }
    }

    return this.prisma.postTranslation.update({
      where: { id },
      data: updatePostTranslationDto,
      include: {
        post: true,
        language: true,
      },
    });
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
