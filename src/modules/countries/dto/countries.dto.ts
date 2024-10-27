import { ApiProperty } from '@nestjs/swagger';

export class TimezoneDto {
  @ApiProperty({ description: 'Назва часового поясу' })
  tzName: string;

  @ApiProperty({ description: 'Назва зони' })
  zoneName: string;

  @ApiProperty({ description: 'GMT офсет' })
  gmtOffset: number;

  @ApiProperty({ description: 'Скорочена назва' })
  abbreviation: string;

  @ApiProperty({ description: 'Назва GMT офсету' })
  gmtOffsetName: string;
}

export class TranslationsDto {
  @ApiProperty({ description: 'Переклад німецькою' })
  de: string;

  @ApiProperty({ description: 'Переклад іспанською' })
  es: string;

  @ApiProperty({ description: 'Переклад перською' })
  fa: string;

  @ApiProperty({ description: 'Переклад французькою' })
  fr: string;

  @ApiProperty({ description: 'Переклад хорватською' })
  hr: string;

  @ApiProperty({ description: 'Переклад італійською' })
  it: string;

  @ApiProperty({ description: 'Переклад японською' })
  ja: string;

  @ApiProperty({ description: 'Переклад корейською' })
  ko: string;

  @ApiProperty({ description: 'Переклад нідерландською' })
  nl: string;

  @ApiProperty({ description: 'Переклад польською' })
  pl: string;

  @ApiProperty({ description: 'Переклад португальською' })
  pt: string;

  @ApiProperty({ description: 'Переклад російською' })
  ru: string;

  @ApiProperty({ description: 'Переклад турецькою' })
  tr: string;

  @ApiProperty({ description: 'Переклад українською' })
  uk: string;

  @ApiProperty({ description: 'Переклад португальською (Бразилія)' })
  'pt-BR': string;

  @ApiProperty({ description: 'Переклад китайською' })
  'zh-CN': string;
}

export class CountryDto {
  @ApiProperty({ description: 'ID країни' })
  id: number;

  @ApiProperty({ description: 'Назва країни' })
  name: string;

  @ApiProperty({ description: 'ISO 3 код' })
  iso3: string;

  @ApiProperty({ description: 'ISO 2 код' })
  iso2: string;

  @ApiProperty({ description: 'Числовий код' })
  numeric_code: string;

  @ApiProperty({ description: 'Телефонний код' })
  phone_code: string;

  @ApiProperty({ description: 'Столиця' })
  capital: string;

  @ApiProperty({ description: 'Валюта' })
  currency: string;

  @ApiProperty({ description: 'Назва валюти' })
  currency_name: string;

  @ApiProperty({ description: 'Символ валюти' })
  currency_symbol: string;

  @ApiProperty({ description: 'TLD' })
  tld: string;

  @ApiProperty({ description: 'Рідна назва' })
  native: string;

  @ApiProperty({ description: 'Регіон' })
  region: string;

  @ApiProperty({ description: 'ID регіону' })
  region_id: string;

  @ApiProperty({ description: 'Субрегіон' })
  subregion: string;

  @ApiProperty({ description: 'ID субрегіону' })
  subregion_id: string;

  @ApiProperty({ description: 'Національність' })
  nationality: string;

  @ApiProperty({ description: 'Широта' })
  latitude: number;

  @ApiProperty({ description: 'Довгота' })
  longitude: number;

  @ApiProperty({ description: 'Емодзі' })
  emoji: string;

  @ApiProperty({ description: 'Unicode емодзі' })
  emojiU: string;

  @ApiProperty({ description: 'Часові пояси', type: [TimezoneDto] })
  timezones: TimezoneDto[];

  @ApiProperty({ description: 'Переклади', type: TranslationsDto })
  translations: TranslationsDto;

  @ApiProperty({ description: 'Прапор' })
  flag: string | null;

  @ApiProperty({ description: 'Геодані' })
  geoData: any; // Можна уточнити тип, якщо відомо

  @ApiProperty({ description: 'Чи є платні дороги' })
  has_toll_roads: boolean;
}
