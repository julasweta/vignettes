export declare class TimezoneDto {
    tzName: string;
    zoneName: string;
    gmtOffset: number;
    abbreviation: string;
    gmtOffsetName: string;
}
export declare class TranslationsDto {
    de: string;
    es: string;
    fa: string;
    fr: string;
    hr: string;
    it: string;
    ja: string;
    ko: string;
    nl: string;
    pl: string;
    pt: string;
    ru: string;
    tr: string;
    uk: string;
    'pt-BR': string;
    'zh-CN': string;
}
export declare class CountryDto {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    latitude: number;
    longitude: number;
    emoji: string;
    emojiU: string;
    timezones: TimezoneDto[];
    translations: TranslationsDto;
    flag: string | null;
    geoData: any;
    has_toll_roads: boolean;
}
