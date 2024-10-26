import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserReqDto } from '../auth/dto/create-user-request.dto';
import { UserResponseMapper } from './dto/user-resp-mappers';

@ApiTags('Users')
//@UseGuards(AuthGuard('bearer'), RoleGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //@RoleDecorator(Role.ADMIN)
  @ApiOperation({ summary: 'Create user' })
  @Post('create')
  async createUser(@Body() body: CreateUserReqDto): Promise<any> {
    const user = await this.usersService.createUser(body);
    return UserResponseMapper.removeInternalInf(user);
  }
}
