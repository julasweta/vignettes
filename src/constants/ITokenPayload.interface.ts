import { Role } from '@prisma/client';
import { TokensEnum } from './tokensEnum';

export interface ITokenPayload {
  id: number;
  role: Role;
  type: TokensEnum;
}
