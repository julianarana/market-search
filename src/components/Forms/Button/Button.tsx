import React, { PropsWithChildren, ReactElement } from 'react';
import classname from 'classnames/bind';
import { Icon, IconType } from '../../Icon';
import styles from './Button.module.scss';

const cx = classname.bind(styles);

interface ButtonProps {
  className?: string;
  iconType?: IconType;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  iconType,
  onClick,
}: PropsWithChildren<ButtonProps>): ReactElement => {
  return (
    <button className={cx('button', className)} onClick={onClick}>
      {children}
      {iconType !== undefined && <Icon type={iconType} />}
    </button>
  );
};
