export interface Author {
  name: string;
  lastname: string;
}

export interface Price {
  amount: number;
  currency: string;
  decimals: number;
}

export interface Item {
  condition: string;
  free_shipping: boolean;
  id: string;
  location: string;
  picture: string;
  price: Price;
  title: string;
}

export interface ItemResponse {
  author?: Author;
  description?: string;
  item: Item;
}

export interface ItemsResponse {
  author?: Author;
  categories?: string[];
  items: Item[];
}
