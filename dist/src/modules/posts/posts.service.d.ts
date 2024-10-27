import { CreatePostDto, PostListQuerytDto, UpdatePostDto } from './dto/post.dto';
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
    findAll(query: PostListQuerytDto): Promise<({
        translations: {
            id: number;
            post_id: number;
            language_id: number;
            title: string;
            description: string;
        }[];
        images: {
            id: number;
            country_id: number | null;
            post_id: number | null;
            url: string;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    })[]>;
    findOne(id: number): Promise<{
        translations: {
            id: number;
            post_id: number;
            language_id: number;
            title: string;
            description: string;
        }[];
        images: {
            id: number;
            country_id: number | null;
            post_id: number | null;
            url: string;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    }>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<{
        translations: {
            id: number;
            post_id: number;
            language_id: number;
            title: string;
            description: string;
        }[];
        images: {
            id: number;
            country_id: number | null;
            post_id: number | null;
            url: string;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    }>;
    remove(id: number): Promise<{
        translations: {
            id: number;
            post_id: number;
            language_id: number;
            title: string;
            description: string;
        }[];
        images: {
            id: number;
            country_id: number | null;
            post_id: number | null;
            url: string;
        }[];
    } & {
        id: number;
        country_id: number | null;
        section_id: number | null;
    }>;
}
