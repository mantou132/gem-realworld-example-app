import { post, del, get } from 'src/service/request';
import { Profile } from 'src/service/profile';

interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
}

type Comments = Comment[];

export function getAll(slug: string) {
  return get<{ comments: Comments }>(`/articles/${slug}/comments/`);
}

export function create(slug: string, comment: string) {
  return post<{ comment: Comment }>(`/articles/${slug}/comments`, { comment });
}

export function delComment(slug: string, commentId: number) {
  return del(`/articles/${slug}/comments/${commentId}`);
}
