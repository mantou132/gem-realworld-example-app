import { createStore, updateStore } from '@mantou/gem';

import * as api from 'src/service/articles';
import { Article } from 'src/service/articles';

interface ArticleSet {
  [slug: string]: Article;
}

export const articleSet = createStore<ArticleSet>({});

export async function updateArticle(article: Article) {
  const data = await api.update(article);
  updateStore(articleSet, { [data.article.slug]: data.article });
}
