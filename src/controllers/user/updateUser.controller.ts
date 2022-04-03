import { Request, Response } from 'express';
import { updateAnyUserService, updateSelfUserService } from '../../services';

const updateUserController = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  let updateUser: undefined | object;
  if (req.isAdm) {
    updateUser = await updateAnyUserService(req);
  } else {
    updateUser = await updateSelfUserService(req);
    if (!updateUser) {
      return res.status(401).json({ message: 'Missing admin permissions' });
    }
  }
  return res.status(200).json(updateUser);
};

export default updateUserController;
