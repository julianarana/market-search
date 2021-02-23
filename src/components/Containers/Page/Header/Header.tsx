import React, { ReactElement, MouseEvent } from 'react';
import classnames from 'classnames/bind';
import { SearchField } from '../../../Forms';
import logo from '../../../../assets/images/logo.png';
import styles from './Header.module.scss';

const cx = classnames.bind(styles);

interface PageProps {
  className: string;
  onSearch: (value: string) => void;
  onLogoClick: (event?: MouseEvent<HTMLElement>) => void;
}

export const Header = ({
  className,
  onLogoClick,
  onSearch,
}: PageProps): ReactElement => {
  return (
    <header className={cx('header', className)}>
      <div className={cx('header__content')}>
        <div className={cx('header__logo')} onClick={onLogoClick}>
          <img src={logo} alt="Mercado libre" />
        </div>
        <div className={cx('header__search')}>
          <SearchField
            placeholder="Nunca dejes de buscar"
            onSearch={onSearch}
          />
        </div>
      </div>
    </header>
  );
};
