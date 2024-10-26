import { IsOptional, IsString } from 'class-validator';
import { Language } from '@prisma/client';
export class UpdateLanguageDto implements Partial<Language> {
  @IsOptional()
  @IsString()
  code?: string; // Код мови (наприклад, "en", "fr")

  @IsOptional()
  @IsString()
  name?: string; // Назва мови
}
