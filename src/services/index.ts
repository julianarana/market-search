import { Item } from '../types';
import { DataResponse } from './types';

const BASE_URL = 'https://api.mercadolibre.com/';

//https://api.mercadolibre.com/items/ :id
//https://api.mercadolibre.com/items/ :id /description

export const getItems = (q: string): Promise<DataResponse<Item[]>> => {
  const url = new URL(`${BASE_URL}/sites/MLA/search`);
  url.search = new URLSearchParams({ q }).toString();
  return fetch(url.toString())
    .then((response: Response) => response.json())
    .then(
      (response: any): DataResponse<Item[]> => {
        console.log("this is the response", response);
        return {
          data: response.results.map(
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
        };
      }
    )
    .then(
      (value): DataResponse<Item[]> => ({
        data: value.data,
      })
    )
    .catch((error) => {
      console.error('This error should be handled better', error);
      return { data: [], paging: null };
    });
};

/*export const getItem = (id: string): Promise<any> => {
  const url = `${BASE_URL}/items/${id}`;
  fetch(url);
};

export const getItemDescription = (id: string): Promise<any> => {};

*/
