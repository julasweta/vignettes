import { PickType } from '@nestjs/swagger';
import { UserBaseDto } from '../../users/dto/user-base.dto';

export class SignInUserRequestDto extends PickType(UserBaseDto, [
  'email',
  'password',
]) {}
