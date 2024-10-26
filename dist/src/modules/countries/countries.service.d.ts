import { Country } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class CountriesService {
    private prisma;
    constructor(prisma: PrismaService);
    fetchCountries(): Promise<any>;
    saveCountries(): Promise<void>;
    getAllCountries(): Promise<Country[]>;
    getCountryById(id: number): Promise<Country | null>;
}
