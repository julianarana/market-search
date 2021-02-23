export interface Store<T> {
  data: T;
  error: string;
  loading: boolean;
}
