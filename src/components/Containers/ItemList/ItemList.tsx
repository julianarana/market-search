import React, { ReactElement, ReactNode, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Item } from '../.././../types';
import { ItemListElement } from './ItemListElement';
import styles from './ItemList.module.scss';

const cx = classnames.bind(styles);

interface ItemListProps {
  items: Item[];
}

export const ItemList = ({ items }: ItemListProps): ReactElement => {
  console.log('the items list', items);

  const sliced = useMemo(() => {
    if (items) {
      return items.slice(0, 4);
    }
    return [];
  }, [items]);
  return (
    <div className={cx('list')}>
      {sliced.map(
          (item: Item): ReactNode => (
            <ItemListElement key={item.id} item={item} />
          )
        )}
    </div>
  );
};
