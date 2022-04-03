import { DeleteResult } from 'typeorm';

/* eslint-disable no-unused-vars */
interface UserTypes {
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}

interface UserRepoTypes {
  saveUser: (user: UserTypes) => Promise<UserTypes>;
  findUsers: () => Promise<UserTypes[]>;
  findOneUser: (data: string) => Promise<UserTypes | undefined>;
  findUserPassword: (data) => Promise<UserTypes | undefined>;
  findProfileUser: (data: string) => Promise<UserTypes | undefined>;
  updateUser:(data: any, id: string) => any;
  deleteUser: (id: string) => Promise<DeleteResult>
 }

export { UserTypes, UserRepoTypes };
