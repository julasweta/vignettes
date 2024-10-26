import { IsOptional, IsString } from 'class-validator';
import { Image } from '@prisma/client';

export class CreateImageDto implements Partial<Image> {
  @IsString()
  url: string; // Посилання на зображення

  @IsOptional()
  post_id?: number; // Зовнішній ключ для Post (необов'язкове поле)

  @IsOptional()
  country_id?: number; // Зовнішній ключ для Country (необов'язкове поле)
}
