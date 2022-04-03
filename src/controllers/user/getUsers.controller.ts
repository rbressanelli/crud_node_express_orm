import { Request, Response } from 'express';
import { UserTypes, UserRepository } from '../../repositories';

const getUsersController = async (req: Request, res: Response) => {
  const users: UserTypes[] = await new UserRepository().findUsers();

  return res.status(200).json(users);
};

export default getUsersController;
