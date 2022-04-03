import { Request, Response } from 'express';
import { UserTypes, UserRepository } from '../../repositories';

const getProfileController = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const user: UserTypes = await new UserRepository().findProfileUser(req.uuid);

  return res.status(200).json(user);
};

export default getProfileController;
