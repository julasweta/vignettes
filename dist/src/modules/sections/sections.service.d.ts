import { PrismaService } from '../../../prisma/prisma.service';
import { Section } from '@prisma/client';
import { CreateSectionDto, UpdateSectionDto } from './dto/sections.dto';
export declare class SectionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSectionDto: CreateSectionDto): Promise<Section>;
    findAll(): Promise<Section[]>;
    findOne(id: number): Promise<Section>;
    update(id: number, updateSectionDto: UpdateSectionDto): Promise<Section>;
    remove(id: number): Promise<string>;
}
