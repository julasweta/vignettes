import { Language } from '@prisma/client';
export declare class CreateLanguageDto implements Omit<Language, 'id'> {
    code: string;
    name: string;
}
