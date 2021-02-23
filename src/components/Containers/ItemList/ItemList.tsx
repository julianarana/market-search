import React, { ReactElement, ReactNode, useMemo } from 'react';
import { Item } from '../.././../types';
import { ItemListElement } from './ItemListElement';

interface ItemListProps {
  items: Item[];
  onItemClicked: (item: Item) => void;
}

export const ItemList = ({
  items,
  onItemClicked,
}: ItemListProps): ReactElement => {
  const sliced = useMemo(() => {
    if (items) {
      return items.slice(0, 4);
    }
    return [];
  }, [items]);

  return (
    <>
      {sliced.map(
        (item: Item): ReactNode => (
          <ItemListElement
            key={item.id}
            item={item}
            onClick={() => onItemClicked(item)}
          />
        )
      )}
    </>
  );
};
