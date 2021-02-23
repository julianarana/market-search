import React, { PropsWithChildren, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames/bind';
import { Header } from './Header';
import { Panel } from '../Panel';
import { buildItemsPath } from '../../../Routes/paths';
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
  return (
    <div className={cx('page')}>
      <Header className={cx('page__header')} onSearch={handleSearch} />
      <div className={cx('page__content')}>
        {children && <Panel>{children}</Panel>}
      </div>
    </div>
  );
};
