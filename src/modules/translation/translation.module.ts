import { Module } from '@nestjs/common';
import { PostTranslationService } from './translation.service';
import { PostTranslationController } from './translation.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  controllers: [PostTranslationController],
  providers: [PostTranslationService, PrismaService],
})
export class PostTranslationModule {}
