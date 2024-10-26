import { IsString } from 'class-validator';
import { Language } from '@prisma/client';

export class CreateLanguageDto implements Omit<Language, 'id'> {
  @IsString()
  code: string; // Код мови (наприклад, "en", "fr")

  @IsString()
  name: string; // Назва мови
}
