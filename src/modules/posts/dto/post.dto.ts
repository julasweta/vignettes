// post.dto.ts
import {
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; // Імпортуємо ApiProperty
import { PostTranslation, Country } from '@prisma/client';
import { CreatePostTranslationDto } from '../../translation/dto/translation.dto';
import { CreateImageDto } from '../../images/dto/create-image.dto';
import { CountryDto } from '../../countries/dto/countries.dto';

// DTO для створення поста
export class CreatePostDto {
  @ApiPropertyOptional({
    description: 'ID країни, до якої відноситься пост',
  })
  @IsOptional()
  @IsNumber()
  country_id?: number;

  @ApiPropertyOptional({
    description: 'ID секції, до якої відноситься пост',
  })
  @IsOptional()
  @IsNumber()
  section_id?: number;

  @ApiProperty({
    type: [CreatePostTranslationDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  translations: CreatePostTranslationDto[];

  @ApiPropertyOptional({
    description: 'Зображення поста',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

// DTO для оновлення поста
export class UpdatePostDto {
  @ApiPropertyOptional({
    description: 'Країни id',
  })
  country_id?: number;

  @ApiPropertyOptional({
    description: 'Section id',
  })
  section_id?: number;

  @ApiPropertyOptional({
    description: 'Переклади поста',
  })
  @IsArray()
  @ValidateNested({ each: true })
  translations?: PostTranslation[];

  @ApiPropertyOptional({
    description: 'Зображення поста',
    type: [String], // Вказуємо, що це масив рядків
  })
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

// Тип для відповіді
export class PostResponse {
  @ApiProperty({
    description: 'ID поста',
  })
  id: number;

  @ApiProperty()
  country_id: number;

  @ApiProperty()
  section_id: number;

  @ApiProperty({
    description: 'Переклади поста',
    type: [CreatePostTranslationDto],
  })
  translations: CreatePostTranslationDto[];

  @ApiProperty({
    description: 'Країна',
    type: [CountryDto],
  })
  country: CountryDto[];

  @ApiProperty({
    description: 'Зображення поста',
    type: [CreateImageDto],
  })
  images: [CreateImageDto][];
}
