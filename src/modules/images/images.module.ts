import { Module } from '@nestjs/common';
import { ImageService } from './images.service';
import { ImageController } from './images.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, PrismaService],
})
export class ImagesModule {}
