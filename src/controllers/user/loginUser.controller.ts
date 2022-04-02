import { Request, Response } from 'express';
import { loginUserService } from '../../services';

const loginUserController = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const responseData = await loginUserService(req.body);

  if (!responseData) {
    return res.status(401).json({ message: 'Wrong email/password' })
  }

  return res.status(200).json(responseData);
};

export default loginUserController;
