import { IsOptional, IsString } from 'class-validator';
import { Image } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto implements Partial<Image> {
  @ApiProperty({ description: 'URL of the image' }) // Опис для Swagger
  @IsString()
  url: string; // Посилання на зображення

  @ApiProperty({
    description: 'Optional post ID to associate the image',
    required: false,
  }) // Опис для Swagger
  @IsOptional()
  post_id?: number; // Зовнішній ключ для Post (необов\'язкове поле)

  @ApiProperty({
    description: 'Optional country ID to associate the image',
    required: false,
  }) // Опис для Swagger
  @IsOptional()
  country_id: number; // Зовнішній ключ для Country (необов\'язкове поле)
}
