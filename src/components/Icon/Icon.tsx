import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import search from '../../assets/images/ic_Search.png';
import styles from './Icon.module.scss';

const cx = classnames.bind(styles);

export enum IconType {
  SEARCH,
}

interface IconProps {
  type: IconType;
}

export const Icon = ({ type }: IconProps): ReactElement => {
  return (
    <div className={cx('icon')}>
      {type === IconType.SEARCH && <img src={search} alt="search" />}
    </div>
  );
};
