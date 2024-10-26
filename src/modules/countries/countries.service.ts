import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class CountriesService {
  constructor(private prisma: PrismaService) {}

  async fetchCountries() {
    const response = await axios.get(
      'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/json/countries.json',
    );
    return response.data;
  }

  async saveCountries() {
    try {
      //await this.prisma.country.deleteMany();

      const apiCountries = await this.fetchCountries();
      const countries = apiCountries.map((country: any) => ({
        id: country.id,
        name: country.name,
        iso3: country.iso3,
        iso2: country.iso2,
        numeric_code: country.numeric_code,
        phone_code: country.phone_code,
        capital: country.capital,
        currency: country.currency,
        currency_name: country.currency_name,
        currency_symbol: country.currency_symbol,
        tld: country.tld,
        native: country.native,
        region: country.region,
        region_id: country.region_id,
        subregion: country.subregion,
        subregion_id: country.subregion_id,
        nationality: country.nationality,
        latitude: parseFloat(country.latitude),
        longitude: parseFloat(country.longitude),
        emoji: country.emoji,
        emojiU: country.emojiU,
        timezones: country.timezones,
        translations: country.translations,
        flag: country.flag,
        geoData: null,
        has_toll_roads: false,
      }));

      console.log('Країни для створення:', countries);

      const result = await this.prisma.country.createMany({
        data: countries,
        skipDuplicates: true,
      });

      console.log('Результат створення:', result);
    } catch (error) {
      console.error('Error in saveCountries:', error);
    }
  }

  async getAllCountries(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }

  async getCountryById(id: number): Promise<Country | null> {
    return this.prisma.country.findUnique({
      where: { id },
    });
  }
}
