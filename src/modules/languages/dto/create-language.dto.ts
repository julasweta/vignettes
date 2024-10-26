import { IsString } from 'class-validator';
import { Language } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger'; // Імпортуємо ApiProperty

export class CreateLanguageDto implements Omit<Language, 'id'> {
  @ApiProperty({ description: 'Код мови (наприклад, "en", "fr")' }) // Опис для поля code
  @IsString()
  code: string; // Код мови

  @ApiProperty({ description: 'Назва мови' }) // Опис для поля name
  @IsString()
  name: string; // Назва мови
}
