import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserTypes, UserRepository } from '../../repositories';
import config from '../../configs';

const loginUserService = async (data) => {
  const { email, password } = data;
  const user: UserTypes = await new UserRepository().findOneUser(email);

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
