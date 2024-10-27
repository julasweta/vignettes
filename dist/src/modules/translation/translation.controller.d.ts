import { PostTranslationService } from './translation.service';
import { BasePostTranslationDto, UpdatePostTranslationDto } from './dto/translation.dto';
export declare class PostTranslationController {
    private readonly postTranslationService;
    constructor(postTranslationService: PostTranslationService);
    create(createPostTranslationDto: BasePostTranslationDto): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }>;
    findAll(): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }>;
    findByPostId(postId: number): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }[]>;
    findByLanguageId(languageId: number): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }[]>;
    update(id: number, updatePostTranslationDto: UpdatePostTranslationDto): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        post_id: number;
        language_id: number;
        title: string;
        description: string;
    }>;
}
