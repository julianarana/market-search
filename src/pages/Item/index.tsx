import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../../components';

const ItemPage = (): ReactElement => {

  const { id } = useParams();

  return (
    <>
      <Page>Single Item {id} </Page>
    </>
  );
};

export default ItemPage;
