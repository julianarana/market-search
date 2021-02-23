import React, { ReactElement, ReactNode, useMemo } from 'react';
import Search from './Icons/Search';

export enum IconType {
  SEARCH,
}

interface IconProps {
  type: IconType;
}

export const Icon = ({ type }: IconProps): ReactElement => {
  const asset = useMemo((): ReactNode => {
    if (type === IconType.SEARCH) {
      return <Search />;
    }
    return <></>;
  }, [type]);

  return <div>{asset}</div>;
};
