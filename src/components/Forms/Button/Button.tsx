import React, { PropsWithChildren, ReactElement } from 'react';
import classname from 'classnames/bind';
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
  onClick?: () => void;
}

export const Button = ({
  buttonStyle,
  children,
  className,
  fullWidth,
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
    </button>
  );
};
