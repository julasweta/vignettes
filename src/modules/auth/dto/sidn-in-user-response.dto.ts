import { PickType } from '@nestjs/swagger';
import { UserBaseDto } from '../../users/dto/user-base.dto';

export class SignInUserResponsetDto extends PickType(UserBaseDto, [
  'id',
  'email',
  'first_name',
  'last_name',
  'gender',
  'role',
  'photo',
  'accessToken',
  'refreshToken',
]) {}
