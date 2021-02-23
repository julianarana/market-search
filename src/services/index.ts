import { Item, ItemsResponse, ItemResponse } from '../types';
import { DataResponse } from './types';

const BASE_URL = 'https://api.mercadolibre.com/';

//https://api.mercadolibre.com/items/ :id
//https://api.mercadolibre.com/items/ :id /description

export const getItems = (q: string): Promise<DataResponse<ItemsResponse>> => {
  const url = new URL(`${BASE_URL}/sites/MLA/search`);
  url.search = new URLSearchParams({ q }).toString();
  return fetch(url.toString())
    .then((response: Response) => response.json())
    .then(
      (response: any): DataResponse<ItemsResponse> => {
        return {
          data: {
            items: response.results.map(
              (responseItem): Item => ({
                condition: responseItem.condition,
                free_shipping: responseItem.shipping.free_shipping,
                id: responseItem.id,
                picture: responseItem.thumbnail,
                price: {
                  amount: responseItem.installments?.amount,
                  currency: responseItem.installments?.currency_id,
                  decimals: 0,
                },
                title: responseItem.title,
                location: responseItem.seller_address.state.name,
              })
            ),
          },
        };
      }
    )
    .catch((error) => {
      console.error('This error should be handled better', error);
      return { data: { items: [] } };
    });
};

export const getItem = (id: string): Promise<DataResponse<ItemResponse>> => {
  const url = `${BASE_URL}/items/${id}`;
  const descriptionPromise = getItemDescription(id);
  const itemPromise = fetch(url);

  return Promise.all([itemPromise, descriptionPromise])
    .then(
      async ([item, description]: [Response, string]): Promise<
        DataResponse<ItemResponse>
      > => {
        const itemJson = await item.json();
        console.log('this is the itemJson', itemJson);
        return {
          data: {
            description,
            item: {
              condition: itemJson.condition,
              free_shipping: itemJson.shipping?.free_shipping,
              id: itemJson.id,
              location: itemJson.seller_address.state.name,
              picture: itemJson.pictures[0]?.url,
              price: {
                amount: itemJson.price,
                currency: itemJson.currency_id,
                decimals: 0,
              },
              title: itemJson.title,
            },
          },
        };
      }
    )
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
