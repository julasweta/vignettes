import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class LanguagesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createLanguageDto: CreateLanguageDto): Promise<Language>;
    findAll(): Promise<Language[]>;
    findOne(id: number): Promise<Language | null>;
    update(id: number, updateLanguageDto: UpdateLanguageDto): Promise<Language>;
    remove(id: number): Promise<Language>;
}
