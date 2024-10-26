import { SignInUserResponsetDto } from '../../auth/dto/sidn-in-user-response.dto';
import { UserBaseDto } from './user-base.dto';

export class UserResponseMapper {
  static removeInternalInf(user: Partial<UserBaseDto>): SignInUserResponsetDto {
    const resUser = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
      photo: user.photo,
      gender: user.gender,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    };
    return resUser;
  }

  static arrRemoveInternalInf(
    users: Partial<UserBaseDto>[],
  ): SignInUserResponsetDto[] {
    return users.map((user) => this.removeInternalInf(user));
  }
}
