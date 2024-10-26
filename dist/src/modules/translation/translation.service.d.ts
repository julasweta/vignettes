import { CreatePostTranslationDto, UpdatePostTranslationDto } from './dto/translation.dto';
import { PostTranslation } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class PostTranslationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPostTranslationDto: CreatePostTranslationDto): Promise<PostTranslation>;
    findAll(): Promise<PostTranslation[]>;
    findOne(id: number): Promise<PostTranslation>;
    update(id: number, updatePostTranslationDto: UpdatePostTranslationDto): Promise<PostTranslation>;
    remove(id: number): Promise<PostTranslation>;
    findByPostId(postId: number): Promise<PostTranslation[]>;
    findByLanguageId(languageId: number): Promise<PostTranslation[]>;
}
