import { useEffect, useState } from 'react';
import { ItemResponse } from '../types';
import { getItem } from '../services';
import { DataResponse } from '../services/types';
import { Store } from './types';

type StoreItem = Store<ItemResponse>;

const initialState: StoreItem = {
  data: null,
  error: null,
  loading: false,
};

export const useItem = (id: string): StoreItem => {
  const [state, setState] = useState<StoreItem>(initialState);

  useEffect(() => {
    getItem(id)
      .then((response: DataResponse<ItemResponse>): void => {
        setState((oldState) => ({
          ...oldState,
          loading: false,
          error: null,
          data: response.data,
        }));
      })
      .catch((error) => {});
  }, [id]);

  return state;
};
