import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsOptional, IsString, IsEmail, IsEnum } from 'class-validator';

export class UserBaseDto {
  @ApiProperty()
  @IsOptional()
  id?: number; // Primary key, може бути необов'язковим під час створення

  @ApiProperty()
  @IsString()
  first_name: string; // Ім'я користувача

  @ApiProperty()
  @IsString()
  last_name: string; // Прізвище користувача

  @ApiProperty()
  @IsOptional()
  @IsString()
  middle_name?: string; // Друге прізвище, необов'язкове

  @ApiProperty()
  @IsEmail()
  email: string; // Унікальна електронна пошта

  @ApiProperty()
  @IsOptional()
  @IsString()
  car_number: string; // Номер автомобіля користувача

  @ApiProperty()
  @IsOptional()
  @IsString()
  photo?: string; // Фото користувача, необов'язкове

  @ApiProperty()
  @IsOptional()
  @IsString()
  birthday?: string | Date; // Дата народження, необов'язкове поле

  @ApiProperty()
  @IsOptional()
  @IsString()
  gender?: string; // Стать користувача, необов'язкове

  @ApiProperty()
  @IsEnum(Role)
  role: Role; // Роль користувача

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  accessToken: string | null;

  @ApiProperty()
  @IsString()
  refreshToken: string | null;
}
