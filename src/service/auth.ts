import { get, post, put } from 'src/service/request';

interface User {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export function current() {
  return get<{ user: User }>('/user');
}

interface UserLoginReq {
  email: string;
  password: string;
}
export function login(user: UserLoginReq) {
  return post('/users/login', { user });
}

type UserRegisterReq = { username: string } & UserLoginReq;
export function register(user: UserRegisterReq) {
  return post('/users', { user });
}

type UserSaveReq = UserRegisterReq;
export function save(user: UserSaveReq) {
  return put('/user', { user });
}
