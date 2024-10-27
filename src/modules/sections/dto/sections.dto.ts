import { ApiProperty } from '@nestjs/swagger';
import { Section } from '@prisma/client';
import { Prisma } from '@prisma/client';

export class CreateSectionDto implements Prisma.SectionCreateInput {
  @ApiProperty()
  name: string;
}

export class UpdateSectionDto implements Partial<Section> {

}
export class ResponseSectionDto implements Partial<Section> {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
