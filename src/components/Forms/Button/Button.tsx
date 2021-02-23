import React, { PropsWithChildren, ReactElement } from 'react';
import classname from 'classnames/bind';
import { Icon, IconType } from '../../Icon';
import styles from './Button.module.scss';

const cx = classname.bind(styles);

export enum ButtonStyle {
  CLASSIC,
  ACTION,
}

interface ButtonProps {
  buttonStyle?: ButtonStyle;
  className?: string;
  fullWidth?: boolean;
  iconType?: IconType;
  onClick?: () => void;
}

export const Button = ({
  buttonStyle,
  children,
  className,
  fullWidth,
  iconType,
  onClick,
}: PropsWithChildren<ButtonProps>): ReactElement => {
  return (
    <button
      className={cx(
        'button',
        { actionBtn: buttonStyle === ButtonStyle.ACTION },
        { fullWidth },
        className
      )}
      onClick={onClick}
    >
      {children}
      {iconType !== undefined && <Icon type={iconType} />}
    </button>
  );
};
