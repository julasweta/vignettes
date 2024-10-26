// post-translation.dto.ts
import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Імпортуємо ApiProperty
import { PostTranslation } from '@prisma/client';

export class CreatePostTranslationDto implements Omit<PostTranslation, 'id'> {
  @ApiProperty({
    description: 'ID посту, до якого відноситься переклад',
  })
  @IsInt()
  post_id: number;

  @ApiProperty({
    description: 'ID мови, на яку здійснюється переклад',
  })
  @IsInt()
  language_id: number;

  @ApiProperty({
    description: 'Заголовок перекладу',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Опис перекладу',
  })
  @IsString()
  description: string;
}

export class UpdatePostTranslationDto
  implements Partial<Omit<PostTranslation, 'id'>>
{
  @ApiProperty({
    description: 'ID посту, до якого відноситься переклад',
    required: false, // Вказуємо, що це поле є необов’язковим
  })
  @IsOptional()
  @IsInt()
  post_id?: number;

  @ApiProperty({
    description: 'ID мови, на яку здійснюється переклад',
    required: false, // Вказуємо, що це поле є необов’язковим
  })
  @IsOptional()
  @IsInt()
  language_id?: number;

  @ApiProperty({
    description: 'Заголовок перекладу',
    required: false, // Вказуємо, що це поле є необов’язковим
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Опис перекладу',
    required: false, // Вказуємо, що це поле є необов’язковим
  })
  @IsOptional()
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
