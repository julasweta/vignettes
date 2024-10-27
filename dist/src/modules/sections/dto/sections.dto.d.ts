import { Section } from '@prisma/client';
import { Prisma } from '@prisma/client';
export declare class CreateSectionDto implements Prisma.SectionCreateInput {
    name: string;
}
export declare class UpdateSectionDto implements Partial<Section> {
}
export declare class ResponseSectionDto implements Partial<Section> {
    id: number;
    name: string;
}
