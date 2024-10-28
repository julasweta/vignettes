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
        country: {
            id: number;
            translations: import("@prisma/client/runtime/library").JsonValue | null;
            name: string;
            iso3: string;
            iso2: string;
            numeric_code: string;
            phone_code: string;
            capital: string | null;
            currency: string | null;
            currency_name: string | null;
            currency_symbol: string | null;
            tld: string | null;
            native: string | null;
            region: string | null;
            region_id: string | null;
            subregion: string | null;
            subregion_id: string | null;
            nationality: string | null;
            latitude: number | null;
            longitude: number | null;
            emoji: string | null;
            emojiU: string | null;
            timezones: import("@prisma/client/runtime/library").JsonValue | null;
            flag: string | null;
            geoData: string | null;
            has_toll_roads: boolean;
        };
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
