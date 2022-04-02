import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request } from 'express';
import { UserTypes, UserRepository } from '../../repositories';
import config from '../../configs';

const loginUserService = async (data: Request) => {
  const { email, password } = data;
  const user: UserTypes = await new UserRepository().findUserPassword({ email });

  if (!user) {
    return undefined;
  }
  const hashedPassword: boolean = await bcrypt.compare(password, user.password);
  if (!hashedPassword) {
    return undefined;
  }
  const token: string = jwt.sign({ email }, config.secretKey, {
    expiresIn: config.expiresIn,
  });
  return { token };
};

export default loginUserService;
