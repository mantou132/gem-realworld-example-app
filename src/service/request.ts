const API_ROOT = 'https://conduit.productionready.io/api';

export default async function request(uri: string, options?: RequestInit) {
  const res = await fetch(uri, options);
  if (!res.ok) throw new Error('request fail');

  return res.json();
}
