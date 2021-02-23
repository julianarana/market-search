import React, { ReactElement, MouseEvent } from 'react';
import classnames from 'classnames/bind';
import { Item } from '../../../../types';
import styles from './ItemListElement.module.scss';
import shipping from '../../../../assets/images/ic_shipping.png';

const cx = classnames.bind(styles);

interface ItemListElementProps {
  item: Item;
  onClick: () => void;
}

export const ItemListElement = ({
  item,
  onClick,
}: ItemListElementProps): ReactElement => {
  const handleElementClick = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className={cx('element')} onClick={handleElementClick}>
      <div className={cx('element__image')}>
        <img src={item.picture} alt={item.title} />
      </div>
      <div className={cx('element__content')}>
        <div className={cx('element__price')}>
          ${item.price.amount}{' '}
          {item.free_shipping && (
            <img
              className={cx('element__freeShipping')}
              src={shipping}
              alt="Free Shipping"
            />
          )}
        </div>
        <div className={cx('element__title')}>{item.title}</div>
      </div>
      <div className={cx('element__location')}>{item.location}</div>
    </div>
  );
};
