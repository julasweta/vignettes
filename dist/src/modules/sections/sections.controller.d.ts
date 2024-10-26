import { SectionsService } from './sections.service';
import { Section } from '@prisma/client';
import { CreateSectionDto, UpdateSectionDto } from './dto/sections.dto';
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    create(createLanguageDto: CreateSectionDto): Promise<Section>;
    findAll(): Promise<Section[]>;
    findOne(id: string): Promise<Section | null>;
    update(id: string, updateLanguageDto: UpdateSectionDto): Promise<Section>;
    remove(id: string): Promise<Section>;
}
