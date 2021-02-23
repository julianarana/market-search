import React, { PropsWithChildren, ReactElement, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames/bind';
import { Header } from './Header';
import { Panel } from '../Panel';
import { buildItemsPath, PATHS } from '../../../Routes/paths';
import styles from './Page.module.scss';

const cx = classnames.bind(styles);

export const Page = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  const { push } = useHistory();
  const handleSearch = (value: string): void => {
    if (value) {
      push(buildItemsPath(value));
    }
  };

  const handleLogoClick = (event?: MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    push(PATHS.search);
  };

  return (
    <div className={cx('page')}>
      <Header
        className={cx('page__header')}
        onSearch={handleSearch}
        onLogoClick={handleLogoClick}
      />
      <div className={cx('page__content')}>
        {children && <Panel>{children}</Panel>}
      </div>
    </div>
  );
};
