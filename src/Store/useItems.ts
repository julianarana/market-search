import { useEffect, useState } from 'react';
import { Item } from '../types';
import { getItems } from '../services';
import { DataResponse } from '../services/types';

interface Store<T> {
  data: T;
  error: string;
  loading: boolean;
}

interface StoreItems extends Store<any> {}

const initialState: StoreItems = {
  data: null,
  error: null,
  loading: false,
  
};

export const useItems = (searchValue: string): StoreItems => {
  const [state, setState] = useState<StoreItems>(initialState);

  useEffect(() => {
    getItems(searchValue).then((response: DataResponse<Item[]>): void => {
      setState((oldState) => ({
        ...oldState,
        loading: false,
        error: null,
        data: response.data,
      }));
    }).catch(error => {

    });
  }, [searchValue]);

  return state;
};
