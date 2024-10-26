"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const axios_1 = require("axios");
let CountriesService = class CountriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async fetchCountries() {
        const response = await axios_1.default.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/json/countries.json');
        return response.data;
    }
    async saveCountries() {
        try {
            const apiCountries = await this.fetchCountries();
            const countries = apiCountries.map((country) => ({
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
        }
        catch (error) {
            console.error('Error in saveCountries:', error);
        }
    }
    async getAllCountries() {
        return this.prisma.country.findMany();
    }
    async getCountryById(id) {
        return this.prisma.country.findUnique({
            where: { id },
        });
    }
};
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CountriesService);
//# sourceMappingURL=countries.service.js.map