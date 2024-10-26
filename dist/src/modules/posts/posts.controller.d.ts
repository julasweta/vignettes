import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PostService } from './posts.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        country_id: number | null;
        section_id: number | null;
    } & {
        translations: import(".prisma/client").PostTranslation[];
        images: import(".prisma/client").Image[];
        country: import(".prisma/client").Country | null;
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
