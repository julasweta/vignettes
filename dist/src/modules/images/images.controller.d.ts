import { Image } from '@prisma/client';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './images.service';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    create(data: CreateImageDto): Promise<Image>;
    findAll(): Promise<Image[]>;
    findOne(id: number): Promise<Image | null>;
    update(id: number, data: UpdateImageDto): Promise<Image>;
    remove(id: number): Promise<Image>;
}
