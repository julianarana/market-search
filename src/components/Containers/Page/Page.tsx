import React, { PropsWithChildren, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from './Header';
import classnames from 'classnames/bind';
import styles from './Page.module.scss';
import { buildItemPath } from '../../../Routes/paths';

const cx = classnames.bind(styles);

export const Page = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  const { push } = useHistory();
  const handleSearch = (value: string): void => {
    if (value) {
      push(buildItemPath(value));
    }
  };
  return (
    <div className={cx('page')}>
      <Header className={cx('page__header')} onSearch={handleSearch} />
      <div className={cx('page__content')}>{children}</div>
    </div>
  );
};
