import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useItems } from '../../Store/useItems';
import { ItemList, Page } from '../../components';
import { useSearchQuery } from '../../utils/useSearchQuery';

const ItemsPage = (): ReactElement => {
  const searchValue = useSearchQuery();

  const { loading, data: items, error } = useItems(searchValue);

  console.log('data', items, loading, searchValue);

  return (
    <>
      <Page>
        <ItemList items={items} />
      </Page>
    </>
  );
};

export default ItemsPage;
