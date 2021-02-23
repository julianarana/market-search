import React, { KeyboardEvent, ReactElement, useState } from 'react';
import classnames from 'classnames/bind';
import { IconType } from '../../Icon';
import { Button } from '../Button';
import { TextField } from '../TextField';
import styles from './SearchField.module.scss';

const cx = classnames.bind(styles);

interface SearchFieldProps {
  initialValue?: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

export const SearchField = ({
  initialValue = '',
  onSearch,
  placeholder,
}: SearchFieldProps): ReactElement => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSearch = () => {
    onSearch(value);
  };

  const handleKeyPress = (event?: KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter') {
      onSearch(value);
    }
  }

  return (
    <div className={cx('searchField')}>
      <TextField
        className={cx('searchField__text')}
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button
        className={cx('searchField__search')}
        iconType={IconType.SEARCH}
        onClick={handleSearch}
      />
    </div>
  );
};
