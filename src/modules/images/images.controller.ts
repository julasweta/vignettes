import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Image as PrismaImage } from '@prisma/client'; // Додаємо цей імпорт
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './images.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('images')
@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new image' })
  @ApiResponse({
    status: 201,
    description: 'The image has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async create(@Body() data: CreateImageDto): Promise<PrismaImage> {
    // Використовуємо PrismaImage
    return this.imageService.createImage(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all images' })
  @ApiResponse({
    status: 200,
    description: 'List of images',
    type: () => [CreateImageDto],
  }) // Використовуємо PrismaImage
  async findAll(): Promise<PrismaImage[]> {
    return this.imageService.getAllImages();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an image by ID' })
  @ApiResponse({
    status: 200,
    description: 'The found image',
  })
  @ApiResponse({ status: 404, description: 'Image not found' })
  async findOne(@Param('id') id: number): Promise<PrismaImage | null> {
    return this.imageService.getImageById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an image by ID' })
  @ApiResponse({
    status: 200,
    description: 'The updated image',
  })
  @ApiResponse({ status: 404, description: 'Image not found' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async update(
    @Param('id') id: number,
    @Body() data: UpdateImageDto,
  ): Promise<PrismaImage> {
    return this.imageService.updateImage(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an image by ID' })
  @ApiResponse({
    status: 200,
    description: 'The deleted image',
  })
  @ApiResponse({ status: 404, description: 'Image not found' })
  async remove(@Param('id') id: number): Promise<PrismaImage> {
    return this.imageService.deleteImage(id);
  }
}
