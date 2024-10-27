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
exports.CountryDto = exports.TranslationsDto = exports.TimezoneDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TimezoneDto {
}
exports.TimezoneDto = TimezoneDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Назва часового поясу' }),
    __metadata("design:type", String)
], TimezoneDto.prototype, "tzName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Назва зони' }),
    __metadata("design:type", String)
], TimezoneDto.prototype, "zoneName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'GMT офсет' }),
    __metadata("design:type", Number)
], TimezoneDto.prototype, "gmtOffset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Скорочена назва' }),
    __metadata("design:type", String)
], TimezoneDto.prototype, "abbreviation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Назва GMT офсету' }),
    __metadata("design:type", String)
], TimezoneDto.prototype, "gmtOffsetName", void 0);
class TranslationsDto {
}
exports.TranslationsDto = TranslationsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад німецькою' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "de", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад іспанською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "es", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад перською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "fa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад французькою' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "fr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад хорватською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "hr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад італійською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "it", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад японською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "ja", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад корейською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "ko", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад нідерландською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "nl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад польською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "pl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад португальською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "pt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад російською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад турецькою' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "tr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад українською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "uk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад португальською (Бразилія)' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "pt-BR", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклад китайською' }),
    __metadata("design:type", String)
], TranslationsDto.prototype, "zh-CN", void 0);
class CountryDto {
}
exports.CountryDto = CountryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID країни' }),
    __metadata("design:type", Number)
], CountryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Назва країни' }),
    __metadata("design:type", String)
], CountryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ISO 3 код' }),
    __metadata("design:type", String)
], CountryDto.prototype, "iso3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ISO 2 код' }),
    __metadata("design:type", String)
], CountryDto.prototype, "iso2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Числовий код' }),
    __metadata("design:type", String)
], CountryDto.prototype, "numeric_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Телефонний код' }),
    __metadata("design:type", String)
], CountryDto.prototype, "phone_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Столиця' }),
    __metadata("design:type", String)
], CountryDto.prototype, "capital", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Валюта' }),
    __metadata("design:type", String)
], CountryDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Назва валюти' }),
    __metadata("design:type", String)
], CountryDto.prototype, "currency_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Символ валюти' }),
    __metadata("design:type", String)
], CountryDto.prototype, "currency_symbol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'TLD' }),
    __metadata("design:type", String)
], CountryDto.prototype, "tld", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Рідна назва' }),
    __metadata("design:type", String)
], CountryDto.prototype, "native", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Регіон' }),
    __metadata("design:type", String)
], CountryDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID регіону' }),
    __metadata("design:type", String)
], CountryDto.prototype, "region_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Субрегіон' }),
    __metadata("design:type", String)
], CountryDto.prototype, "subregion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID субрегіону' }),
    __metadata("design:type", String)
], CountryDto.prototype, "subregion_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Національність' }),
    __metadata("design:type", String)
], CountryDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Широта' }),
    __metadata("design:type", Number)
], CountryDto.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Довгота' }),
    __metadata("design:type", Number)
], CountryDto.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Емодзі' }),
    __metadata("design:type", String)
], CountryDto.prototype, "emoji", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unicode емодзі' }),
    __metadata("design:type", String)
], CountryDto.prototype, "emojiU", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Часові пояси', type: [TimezoneDto] }),
    __metadata("design:type", Array)
], CountryDto.prototype, "timezones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Переклади', type: TranslationsDto }),
    __metadata("design:type", TranslationsDto)
], CountryDto.prototype, "translations", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Прапор' }),
    __metadata("design:type", String)
], CountryDto.prototype, "flag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Геодані' }),
    __metadata("design:type", Object)
], CountryDto.prototype, "geoData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Чи є платні дороги' }),
    __metadata("design:type", Boolean)
], CountryDto.prototype, "has_toll_roads", void 0);
//# sourceMappingURL=countries.dto.js.map