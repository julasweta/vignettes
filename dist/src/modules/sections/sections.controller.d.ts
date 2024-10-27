import { SectionsService } from './sections.service';
import { Section } from '@prisma/client';
import { CreateSectionDto, UpdateSectionDto } from './dto/sections.dto';
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    create(createSectionDto: CreateSectionDto): Promise<Section>;
    findAll(): Promise<Section[]>;
    findOne(id: string): Promise<Section | null>;
    update(id: string, updateSectionDto: UpdateSectionDto): Promise<Section>;
    remove(id: string): Promise<string>;
}
