import { Request } from 'express';
import { UpdateResult } from 'typeorm';
import { UserRepository, UserTypes } from '../../repositories';

const updateAnyUserService = async (data: Request): Promise<UpdateResult> => {
  const updateReturn = await new UserRepository().updateUser(
    data.validated as UserTypes,
    data.params.uuid,
  );

  const { password: dataPassword, ...user } = await updateReturn.raw[0];

  return user;
};

export default updateAnyUserService;
