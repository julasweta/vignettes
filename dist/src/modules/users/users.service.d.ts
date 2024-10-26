import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUserReqDto } from '../auth/dto/create-user-request.dto';
import { UserBaseDto } from './dto/user-base.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInUserResponsetDto } from '../auth/dto/sidn-in-user-response.dto';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(body: CreateUserReqDto): Promise<Partial<UserBaseDto>>;
    getUserById(id: number): Promise<Partial<UserBaseDto>>;
    getUserByProperty(propertyName: string, property: any): Promise<Partial<UserBaseDto>>;
    updateById(id: number, updateUserDto: UpdateUserDto): Promise<SignInUserResponsetDto>;
}
