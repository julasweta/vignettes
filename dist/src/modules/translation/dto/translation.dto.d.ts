import { PostTranslation } from '@prisma/client';
export declare class CreatePostTranslationDto implements Omit<PostTranslation, 'id'> {
    post_id: number;
    language_id: number;
    title: string;
    description: string;
}
export declare class UpdatePostTranslationDto implements Partial<Omit<PostTranslation, 'id'>> {
    post_id?: number;
    language_id?: number;
    title?: string;
    description?: string;
}
export type PostTranslationResponse = {
    id: number;
    post_id: number;
    language_id: number;
    title: string;
    description: string;
};
