import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../configs';

const authUser = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Missing authorization headers' });
  }

  const token: string = req.headers.authorization?.split(' ')[1];

  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (decoded) {
      req.email = Object.values(decoded)[0];
    }
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' })
    }
  });
  return next();
};

export default authUser;
