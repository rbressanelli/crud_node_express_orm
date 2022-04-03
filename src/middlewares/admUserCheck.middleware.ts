import { NextFunction, Request, Response } from 'express';
import { UserRepository, UserTypes } from '../repositories';

const admUserCheck = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    const user: UserTypes = await new UserRepository().findOneUser(req.email);
    if (user.isAdm) {
      req.isAdm = user.isAdm;
      return next();
    }
    if (req.method === 'PATCH') {
      req.isAdm = user.isAdm;
      return next();
    }
    if (req.method === 'DELETE') {
      req.isAdm = user.isAdm;
      return next();
    }
    return res.status(401).json({ message: 'Unauthorized' });
  } catch (error) {
    return res.status(400).json({ message: 'Bad request.' });
  }
};

export default admUserCheck;
