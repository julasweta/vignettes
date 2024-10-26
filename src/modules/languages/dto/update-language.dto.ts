import { IsOptional, IsString } from 'class-validator';
import { Language } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger'; // Імпортуємо ApiProperty

export class UpdateLanguageDto implements Partial<Language> {
  @ApiProperty({
    description: 'Код мови (наприклад, "en", "fr")',
    required: false, // Вказуємо, що це поле є необов’язковим
  })
  @IsOptional()
  @IsString()
  code?: string; // Код мови

  @ApiProperty({
    description: 'Назва мови',
    required: false, // Вказуємо, що це поле є необов’язковим
  })
  @IsOptional()
  @IsString()
  name?: string; // Назва мови
}
