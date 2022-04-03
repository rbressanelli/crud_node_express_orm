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

  findOneUser = async (data) => await this.ormRepository.findOne({ email: data });

  findUserPassword = async (data) => await this.ormRepository.createQueryBuilder(data).addSelect('password').addSelect('email').andWhere(data)
.getOne();

  findProfileUser = async (data: string) => await this.ormRepository.findOne({ uuid: data });

  updateUser = async (data, id) => await
  this.ormRepository.createQueryBuilder().update(User).set(data).where({ uuid: id })
.returning('*')
  .execute();

  deleteUser = async (id) => await
  this.ormRepository.createQueryBuilder().delete().where({ uuid: id }).execute();
}

export { UserRepository, UserTypes };
