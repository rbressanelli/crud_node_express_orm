import { UserTypes } from '../repositories';

declare global {
  namespace Express {
    interface Request {
      validated: UserTypes,
      email: string
    }
  }
}