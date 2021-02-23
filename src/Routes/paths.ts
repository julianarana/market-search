export const PATHS = {
  item: '/items/:id',
  items: '/items',
  search: '/',
};

export const buildItemsPath = (searchValue: string): string => {
  return `${PATHS.items}?search=${encodeURIComponent(searchValue)}`;
};

export const buildItemPath = (id: string): string => {
  return PATHS.item.replace(':id', id);
};
