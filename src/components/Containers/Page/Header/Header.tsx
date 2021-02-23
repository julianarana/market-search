import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
import { SearchField } from '../../../Forms';

const cx = classnames.bind(styles);

interface PageProps {
  className: string;
  onSearch: (value: string) => void;
}

export const Header = ({ className, onSearch }: PageProps): ReactElement => {
  return (
    <header className={cx('header', className)}>
      <div className={cx('header__search')}>
        <SearchField placeholder="Nunca dejes de buscar" onSearch={onSearch} />
      </div>
    </header>
  );
};
