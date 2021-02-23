export const PATHS = {
  item: '/items/:id',
  items: '/items',
  search: '/',
};

export const buildItemPath = (searchValue: string): string => {
  return `${PATHS.items}?search=${encodeURIComponent(searchValue)}`;
};
