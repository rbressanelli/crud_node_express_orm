import { Request, Response } from 'express';
import { UserTypes, UserRepository } from '../../repositories';

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: UserTypes = await new UserRepository().saveUser(
      req.validated as UserTypes,
    );
    const { password: dataPassword, ...userData } = user;
    return res.status(201).json(userData);
  } catch (error) {
      return res.status(400).json({ error: 'E-mail already registered' });
  }
};

export default createUserController;
