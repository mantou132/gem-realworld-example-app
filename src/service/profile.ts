import { post, del, get } from 'src/service/request';

export interface Profile {
  username: string;
  following: boolean;
  bio: string | null;
  image: string | null;
}

export function follow(username: string) {
  return post<{ profile: Profile }>(`/profiles/${username}/follow`);
}

export function unfollow(username: string) {
  return del<{ profile: Profile }>(`/profiles/${username}/follow`);
}

export function getProfile(username: string) {
  return get<{ profile: Profile }>(`/profiles/${username}`);
}
