import { PostTranslationService } from './translation.service';
import { CreatePostTranslationDto, UpdatePostTranslationDto } from './dto/translation.dto';
export declare class PostTranslationController {
    private readonly postTranslationService;
    constructor(postTranslationService: PostTranslationService);
    create(createPostTranslationDto: CreatePostTranslationDto): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }>;
    findAll(): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }>;
    findByPostId(postId: number): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }[]>;
    findByLanguageId(languageId: number): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }[]>;
    update(id: number, updatePostTranslationDto: UpdatePostTranslationDto): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        description: string;
        title: string;
        post_id: number;
        language_id: number;
    }>;
}
