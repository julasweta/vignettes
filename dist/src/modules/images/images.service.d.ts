import { Image } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class ImageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createImage(data: {
        url: string;
        post_id?: number;
        country_id?: number;
    }): Promise<Image>;
    getAllImages(): Promise<Image[]>;
    getImageById(id: number): Promise<Image | null>;
    updateImage(id: number, data: {
        url?: string;
        post_id?: number;
        country_id?: number;
    }): Promise<Image>;
    deleteImage(id: number): Promise<Image>;
}
