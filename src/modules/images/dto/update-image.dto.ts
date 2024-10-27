import { IsOptional, IsString } from 'class-validator';
import { Image } from '@prisma/client';

export class UpdateImageDto implements Partial<Image> {
  @IsOptional()
  @IsString()
  url?: string; // Посилання на зображення (необов'язкове поле)
}
