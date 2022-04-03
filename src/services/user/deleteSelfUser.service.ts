import { Request } from 'express';
import { DeleteResult } from 'typeorm';
import { UserRepository } from '../../repositories';

const deleteSelfUserService = async (data: Request): Promise<DeleteResult> => {
  if (data.uuid !== data.params.uuid) {
    return undefined;
  }
  const deletedUser = await new UserRepository().deleteUser(data.params.uuid);

  return deletedUser;
};

export default deleteSelfUserService;
