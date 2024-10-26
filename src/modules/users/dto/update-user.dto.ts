import { PartialType } from '@nestjs/swagger';
import { UserBaseDto } from '../../users/dto/user-base.dto';

export class UpdateUserDto extends PartialType(UserBaseDto) {}
