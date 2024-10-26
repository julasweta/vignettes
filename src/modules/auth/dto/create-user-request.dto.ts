import { PickType } from '@nestjs/swagger';
import { UserBaseDto } from '../../users/dto/user-base.dto';

export class CreateUserReqDto extends PickType(UserBaseDto, [
  'birthday',
  'car_number',
  'email',
  'first_name',
  'last_name',
  'photo',
  'role',
  'gender',
  'password',
]) {}
