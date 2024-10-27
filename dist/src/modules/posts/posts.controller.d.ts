import { CreatePostDto, PostListQuerytDto, UpdatePostDto } from './dto/post.dto';
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
