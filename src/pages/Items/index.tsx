import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useItems } from '../../Store/useItems';
import { ItemList, Page } from '../../components';
import { Item } from '../../types';
import { useSearchQuery } from '../../utils/useSearchQuery';
import { buildItemPath } from '../../Routes/paths';

const ItemsPage = (): ReactElement => {
  const { push } = useHistory();
  const searchValue = useSearchQuery();

  const { loading, data, error } = useItems(searchValue);

  const handleItemClicked = (item: Item): void => {
    push(buildItemPath(item.id));
  };

  return (
    <Page>
      <ItemList items={data.items} onItemClicked={handleItemClicked} />
    </Page>
  );
};

export default ItemsPage;
