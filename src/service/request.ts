const API_ROOT = 'https://conduit.productionready.io/api';

const defaultReq: RequestInit = {
  mode: 'cors',
};

async function request<T>(uri: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(uri, { ...defaultReq, ...options });
  if (!res.ok || res.status === 0) throw new Error('request fail');
  if (res.status >= 500) throw new Error('Server error');
  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error('Server error');
  }
  if (res.status >= 400) throw new Error(data?.message || 'argument error');
  return data;
}

type ReqBody = object | BodyInit;
const TypedArray = Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array()));

function serializationBody(body?: ReqBody): BodyInit | undefined {
  if (
    body instanceof FormData ||
    body instanceof Blob ||
    body instanceof TypedArray ||
    body instanceof URLSearchParams ||
    body instanceof ReadableStream ||
    body instanceof ArrayBuffer
  ) {
    return body as BodyInit;
  }
  if (typeof body === 'object') {
    return JSON.stringify(body);
  }
  return body;
}

export function get<T>(path: string, body?: object) {
  return request<T>(`${API_ROOT}${path}?${new URLSearchParams(body as Record<string, string>)}`, { method: 'GET' });
}
export function del<T>(path: string) {
  return request<T>(`${API_ROOT}${path}`, { method: 'DELETE' });
}
export function put<T>(path: string, body?: ReqBody) {
  return request<T>(`${API_ROOT}${path}`, { method: 'PUT', body: serializationBody(body) });
}
export function post<T>(path: string, body?: ReqBody) {
  return request<T>(`${API_ROOT}${path}`, { method: 'POST', body: serializationBody(body) });
}
