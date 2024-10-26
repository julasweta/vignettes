// post-translation.dto.ts
import { IsString, IsInt } from 'class-validator';
import { PostTranslation } from '@prisma/client';

export class CreatePostTranslationDto implements Omit<PostTranslation, 'id'> {
  @IsInt()
  post_id: number;

  @IsInt()
  language_id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class UpdatePostTranslationDto
  implements Partial<Omit<PostTranslation, 'id'>>
{
  @IsInt()
  post_id?: number;

  @IsInt()
  language_id?: number;

  @IsString()
  title?: string;

  @IsString()
  description?: string;
}

export type PostTranslationResponse = {
  id: number;
  post_id: number;
  language_id: number;
  title: string;
  description: string;
};
