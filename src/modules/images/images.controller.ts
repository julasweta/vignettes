import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Image } from '@prisma/client';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './images.service';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  // Створення нового зображення
  @Post()
  async create(@Body() data: CreateImageDto): Promise<Image> {
    return this.imageService.createImage(data);
  }

  // Отримання всіх зображень
  @Get()
  async findAll(): Promise<Image[]> {
    return this.imageService.getAllImages();
  }

  // Отримання зображення за ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Image | null> {
    return this.imageService.getImageById(id);
  }

  // Оновлення зображення
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateImageDto,
  ): Promise<Image> {
    return this.imageService.updateImage(id, data);
  }

  // Видалення зображення
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Image> {
    return this.imageService.deleteImage(id);
  }
}
