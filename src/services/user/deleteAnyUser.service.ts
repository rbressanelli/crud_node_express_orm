import { Request } from 'express';
import { DeleteResult } from 'typeorm';
import { UserRepository } from '../../repositories';

const deleteAnyUserService = async (data: Request): Promise<DeleteResult> => {
   const deletedUser = await new UserRepository().deleteUser(data.params.uuid);

  return deletedUser;
};

export default deleteAnyUserService;
