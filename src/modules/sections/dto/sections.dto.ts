import { Section } from '@prisma/client';
import { Prisma } from '@prisma/client';

export class CreateSectionDto implements Prisma.SectionCreateInput {
  name: string;
}

export class UpdateSectionDto implements Partial<Section> {}
