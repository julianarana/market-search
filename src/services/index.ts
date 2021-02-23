import { ItemsResponse, ItemResponse } from '../types';
import { DataResponse } from './types';

const BASE_URL = 'http://localhost:8000/api/';

export const getItems = (q: string): Promise<DataResponse<ItemsResponse>> => {
  const url = new URL(`${BASE_URL}items`);
  url.search = new URLSearchParams({ q }).toString();
  return fetch(url.toString())
    .then((response: Response) => response.json())
    .catch((error) => {
      console.error('This error should be handled better', error);
      return { data: { items: [] } };
    });
};

export const getItem = (id: string): Promise<DataResponse<ItemResponse>> => {
  const url = `${BASE_URL}items/${id}`;
  return fetch(url)
    .then((response: Response) => response.json())
    .catch((error) => {
      console.error('This error should be handled better', error);
      return { data: { item: null } };
    });
};

export const getItemDescription = (id: string): Promise<string> => {
  const url = `${BASE_URL}/items/${id}/description`;
  return fetch(url)
    .then((response: Response) => response.json())
    .then((response): string => response.plain_text)
    .catch((error) => {
      console.error('This error should be handled better', error);
      return '';
    });
};
