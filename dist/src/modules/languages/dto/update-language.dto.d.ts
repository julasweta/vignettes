import { Language } from '@prisma/client';
export declare class UpdateLanguageDto implements Partial<Language> {
    code?: string;
    name?: string;
}
