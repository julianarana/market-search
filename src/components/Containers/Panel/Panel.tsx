import React, { PropsWithChildren, ReactElement } from 'react';
import classnames from 'classnames/bind';

import styles from './Panel.module.scss';

const cx = classnames.bind(styles);

export const Panel = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  return <section className={cx('panel')}>{children}</section>;
};
