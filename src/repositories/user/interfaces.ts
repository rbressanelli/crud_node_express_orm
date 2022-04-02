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
  findUsers: () => Promise<UserTypes[]>
}

export { UserTypes, UserRepoTypes };
