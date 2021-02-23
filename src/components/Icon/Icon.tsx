import React, { ReactElement, ReactNode, useMemo } from 'react';
import classname from 'classnames/bind';
import Search from './Icons/Search';
import styles from './icon.module.scss';

const cx = classname.bind(styles);

export enum IconType {
  SEARCH,
}

interface IconProps {
  className?: string;
  type: IconType;
}

export const Icon = ({ className, type }: IconProps): ReactElement => {
  const asset = useMemo((): ReactNode => {
    if (type === IconType.SEARCH) {
      return <Search />;
    }
    return <></>;
  }, [type]);

  return <div className={cx('icon', className)}>{asset}</div>;
};
