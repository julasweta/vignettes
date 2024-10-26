import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Country, Image, Post, PostTranslation } from '@prisma/client';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostDto: CreatePostDto): Promise<Post & {
        translations: PostTranslation[];
        images: Image[];
        country: Country | null;
    }>;
    findAll(): Promise<({
        translations: {
            id: number;
            description: string;
            title: string;
            post_id: number;
            language_id: number;
        }[];
        images: {
            id: number;
            url: string;
            post_id: number | null;
            country_id: number | null;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    })[]>;
    findOne(id: number): Promise<{
        translations: {
            id: number;
            description: string;
            title: string;
            post_id: number;
            language_id: number;
        }[];
        images: {
            id: number;
            url: string;
            post_id: number | null;
            country_id: number | null;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    }>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<{
        translations: {
            id: number;
            description: string;
            title: string;
            post_id: number;
            language_id: number;
        }[];
        images: {
            id: number;
            url: string;
            post_id: number | null;
            country_id: number | null;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    }>;
    remove(id: number): Promise<{
        translations: {
            id: number;
            description: string;
            title: string;
            post_id: number;
            language_id: number;
        }[];
        images: {
            id: number;
            url: string;
            post_id: number | null;
            country_id: number | null;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    }>;
}
