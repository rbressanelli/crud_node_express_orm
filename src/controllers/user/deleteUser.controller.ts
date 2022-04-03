import { Request, Response } from 'express';
import { deleteAnyUserService, deleteSelfUserService } from '../../services';

const deleteUserController = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  let deletedUser: undefined | object;
  console.log(req.isAdm)
  if (req.isAdm) {
    deletedUser = await deleteAnyUserService(req);
  } else {
    deletedUser = await deleteSelfUserService(req);
    if (!deletedUser) {
      return res.status(401).json({ message: 'Missing admin permissions' });
    }
  }
  console.log(req.isAdm)

  return res.status(200).json({ message: 'User deleted with success' });
};

export default deleteUserController;
