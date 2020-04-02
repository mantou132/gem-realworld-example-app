import { get, del, post, put } from 'src/service/request';

interface ArticlesReq {
  limit?: string;
  offset?: string;
  tag?: string;
  author?: string;
  favorited?: boolean;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  createdAt: string;
  updatedAt: string;
}

interface ArticlesRse {
  articlesCount: number;
  articles: Article[];
}

export function getArticles(params: ArticlesReq) {
  return get<ArticlesRse>('/articles', params);
}

export function feed() {
  return get<ArticlesRse>(`/articles/feed?limit=10&offset=0`);
}

export function getArticle(slug: string) {
  return get<{ article: Article }>(`/articles/${slug}`);
}

export function delArticle(slug: string) {
  return del<{ article: Article }>(`/articles/${slug}`);
}

export function favorite(slug: string) {
  return post<{ article: Article }>(`/articles/${slug}/favorite`);
}

export function unfavorite(slug: string) {
  return del<{ article: Article }>(`/articles/${slug}/favorite`);
}

export function update(article: Article) {
  delete article.slug;
  return put<{ article: Article }>(`/articles/${article.slug}`, { article });
}

export function create(article: Article) {
  return post<{ article: Article }>(`/articles`, { article });
}
