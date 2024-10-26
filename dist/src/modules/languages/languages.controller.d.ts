import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from '@prisma/client';
export declare class LanguagesController {
    private readonly languagesService;
    constructor(languagesService: LanguagesService);
    create(createLanguageDto: CreateLanguageDto): Promise<Language>;
    findAll(): Promise<Language[]>;
    findOne(id: string): Promise<Language | null>;
    update(id: string, updateLanguageDto: UpdateLanguageDto): Promise<Language>;
    remove(id: string): Promise<Language>;
}
