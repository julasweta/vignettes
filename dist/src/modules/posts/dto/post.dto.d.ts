import { PostTranslation } from '@prisma/client';
import { CreatePostTranslationDto } from '../../translation/dto/translation.dto';
import { CreateImageDto } from '../../images/dto/create-image.dto';
import { CountryDto } from '../../countries/dto/countries.dto';
export declare class CreatePostDto {
    country_id?: number;
    section_id?: number;
    translations: CreatePostTranslationDto[];
    images?: string[];
}
export declare class UpdatePostDto {
    country_id?: number;
    section_id?: number;
    translations?: PostTranslation[];
    images?: string[];
}
export declare class PostResponse {
    id: number;
    country_id: number;
    section_id: number;
    translations: CreatePostTranslationDto[];
    country: CountryDto[];
    images: [CreateImageDto][];
}
