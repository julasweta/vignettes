import { Image } from '@prisma/client';
export declare class UpdateImageDto implements Partial<Image> {
    url?: string;
    post_id?: number;
    country_id?: number;
}
