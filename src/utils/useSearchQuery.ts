import { useLocation } from 'react-router-dom';

export const useSearchQuery = (): string => {
  const { search } = useLocation();
  const params = search.substring(1).split('&');

  return params.reduce((prev, value): string => {
    const keyValuePair = value.split('=');
    if (keyValuePair[0] === 'search') {
      return keyValuePair[1];
    }
    return prev;
  }, '');
};
