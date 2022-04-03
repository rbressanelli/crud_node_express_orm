import { Request, Response } from 'express';
import { deleteAnyUserService, deleteSelfUserService } from '../../services';

const deleteUserController = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  let deletedUser: undefined | object;
  try {
    if (req.isAdm) {
      deletedUser = await deleteAnyUserService(req);
    } else {
      deletedUser = await deleteSelfUserService(req);
      if (!deletedUser) {
        return res.status(401).json({ message: 'Missing admin permissions' });
      }
    }
    return res.status(200).json({ message: 'User deleted with success' });
  } catch (error) {
      return res.status(400).json({ message: 'Bad request' });
  }
};

export default deleteUserController;
