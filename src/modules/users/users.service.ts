import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserReqDto } from '../auth/dto/create-user-request.dto';
import { UserBaseDto } from './dto/user-base.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInUserResponsetDto } from '../auth/dto/sidn-in-user-response.dto';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(body: CreateUserReqDto): Promise<Partial<UserBaseDto>> {
    // Перетворюємо рядок дати в об'єкт Date
    const birth = body.birthday ? new Date(body.birthday) : null;

    // Перевіряємо, чи існує користувач з такою ж електронною адресою
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: body.email },
    });

    // Якщо користувач вже існує, повертаємо повідомлення
    if (existingUser) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    return await this.prismaService.user.create({
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        car_number: body.car_number,
        photo: body.photo,
        birthday: birth,
        gender: body.gender,
        role: body.role || Role.USER,
        password: hashedPassword,
      },
    });
  }

  async getUserById(id: number): Promise<Partial<UserBaseDto>> {
    const user = await this.prismaService.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async getUserByProperty(
    propertyName: string,
    property: any,
  ): Promise<Partial<UserBaseDto>> {
    const user = await this.prismaService.user.findFirst({
      where: { [propertyName]: property },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async updateById(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<SignInUserResponsetDto> {
    const user = await this.getUserById(id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id: id },
      data: updateUserDto,
    });

    const accessToken = user.accessToken;
    const refreshToken = user.refreshToken;

    // Повертайте оновленого користувача разом з токенами
    return {
      ...updatedUser,
      accessToken,
      refreshToken,
    } as SignInUserResponsetDto;
  }
}
