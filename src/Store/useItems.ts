import { useEffect, useState } from 'react';
import { Item, ItemsResponse } from '../types';
import { getItems } from '../services';
import { DataResponse } from '../services/types';
import { Store } from './types';

type StoreItems = Store<ItemsResponse>;

const initialState: StoreItems = {
  data: null,
  error: null,
  loading: false,
};

export const useItems = (searchValue: string): StoreItems => {
  const [state, setState] = useState<StoreItems>(initialState);

  useEffect(() => {
    getItems(searchValue)
      .then((response: DataResponse<ItemsResponse>): void => {
        setState((oldState) => ({
          ...oldState,
          loading: false,
          error: null,
          data: response.data,
        }));
      })
      .catch((error) => {});
  }, [searchValue]);

  return state;
};
