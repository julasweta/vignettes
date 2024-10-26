import { Role } from '@prisma/client';
export declare class UserBaseDto {
    id?: number;
    first_name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    car_number: string;
    photo?: string;
    birthday?: string | Date;
    gender?: string;
    role: Role;
    password: string;
    accessToken: string | null;
    refreshToken: string | null;
}
