import { Request, Response } from 'express';
import User from '../../entities/User';
import { UserTypes, UserRepository } from '../../repositories';

const getUsersController = async (req: Request, res: Response) => {
  const users: UserTypes[] = await new UserRepository().findUsers();
  // const password: User = await new UserRepository().findPassword();

  // console.log(password)

  return res.status(200).json(users);
};

export default getUsersController;
