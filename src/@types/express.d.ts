import { UserTypes } from '../repositories';

declare global {
  namespace Express {
    interface Request {
      validated: UserTypes,
      email: string,
      password: string,
      uuid: string,
      isAdm: boolean,
    }
  }
}