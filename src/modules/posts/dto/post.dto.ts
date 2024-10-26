// post.dto.ts
import {
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
  IsInt,
  IsNumber,
} from 'class-validator';
import { PostTranslation } from '@prisma/client';

// DTO для створення поста
export class CreatePostDto {
  @IsOptional()
  @IsNumber()
  country_id?: number;

  @IsOptional()
  @IsNumber()
  section_id?: number;

  @IsArray()
  @ValidateNested({ each: true })
  translations: PostTranslation[];

  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

// DTO для оновлення поста
export class UpdatePostDto {
  @IsArray()
  @ValidateNested({ each: true })
  translations?: PostTranslation[];

  @IsArray()
  @IsString({ each: true })
  images?: string[];
}

// Тип для відповіді
export type PostResponse = {
  id: number;
  translations: {
    id: number;
    language_id: number;
    title: string;
    description: string;
  }[];
  images: {
    id: number;
    url: string;
  }[];
};
