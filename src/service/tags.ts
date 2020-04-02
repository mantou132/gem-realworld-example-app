import { get } from 'src/service/request';

type Tags = string[];

export function getAll() {
  return get<{ tags: Tags }>('/tags');
}
