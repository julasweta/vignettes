// post.dto.ts
import {
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; // Імпортуємо ApiProperty
import { PostTranslation } from '@prisma/client';

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
    type: [], // Вказуємо, що це масив обʼєктів PostTranslation
  })
  @IsArray()
  @ValidateNested({ each: true })
  translations: PostTranslation[];

  @ApiPropertyOptional({
    description: 'Зображення поста',
    type: [String], // Вказуємо, що це масив рядків
  })
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

// DTO для оновлення поста
export class UpdatePostDto {
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

  @ApiProperty({
    description: 'Переклади поста',
    type: () => [
      {
        id: Number,
        language_id: Number,
        title: String,
        description: String,
      },
    ],
  })
  translations: {
    id: number;
    language_id: number;
    title: string;
    description: string;
  }[];

  @ApiProperty({
    description: 'Зображення поста',
    type: () => [
      {
        id: Number,
        url: String,
      },
    ],
  })
  images: {
    id: number;
    url: string;
  }[];
}
