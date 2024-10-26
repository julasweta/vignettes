import { UsersService } from './users.service';
import { CreateUserReqDto } from '../auth/dto/create-user-request.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserReqDto): Promise<any>;
}
