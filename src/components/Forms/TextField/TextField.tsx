import React, { ChangeEvent, MouseEvent, ReactElement } from 'react';
import classnames from 'classnames/bind';
import styles from './TextField.module.scss';

const cx = classnames.bind(styles);

interface TextFieldProps {
  className?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

export const TextField = ({
  className,
  fullWidth,
  onChange,
  placeholder,
  value,
}: TextFieldProps): ReactElement => {
  const handleChange = (event?: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <input
      className={cx('textField', { fullWidth }, className)}
      onChange={handleChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};
