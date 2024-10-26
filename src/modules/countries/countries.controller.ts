import { Controller, Get, Param, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from '@prisma/client';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  // Отримати всі країни з бази даних
  @Get()
  async getAllCountries(): Promise<Country[]> {
    return this.countriesService.getAllCountries();
  }

  // Отримати країну за ID
  @Get(':id')
  async getCountryById(@Param('id') id: number): Promise<Country | null> {
    return this.countriesService.getCountryById(id);
  }

  // Синхронізувати країни з API
  @Post('sync')
  async syncCountries() {
    await this.countriesService.saveCountries();
    return { message: 'Країни успішно синхронізовані!' };
  }
}
