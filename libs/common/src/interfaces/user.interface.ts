export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface IAuthUser extends Pick<IUser, 'id' | 'email'> {
  // TODO: Role should be constant too
  roles: string[];
}
