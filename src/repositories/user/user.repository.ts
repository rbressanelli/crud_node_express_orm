import { Repository, getRepository } from 'typeorm';
import User from '../../entities/User';
import { UserRepoTypes, UserTypes } from './interfaces';

class UserRepository implements UserRepoTypes {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = async (user: UserTypes) => await this.ormRepository.save(user);

  findUsers = async () => await this.ormRepository.find();

  findOneUser = async (data: string) => await this.ormRepository.findOne({ email: data });
}

export { UserRepository, UserTypes };
