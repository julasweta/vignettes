import { PostTranslation } from '@prisma/client';
export declare class CreatePostDto {
    country_id?: number;
    section_id?: number;
    translations: PostTranslation[];
    images?: string[];
}
export declare class UpdatePostDto {
    translations?: PostTranslation[];
    images?: string[];
}
export type PostResponse = {
    id: number;
    translations: {
        id: number;
        language_id: number;
        title: string;
        description: string;
    }[];
    images: {
        id: number;
        url: string;
    }[];
};
