import React, { ReactElement } from 'react';
import classnames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { Page, Button } from '../../components';
import { useItem } from '../../Store/useItem';
import styles from './ItemPage.module.scss';

const cx = classnames.bind(styles);

const ItemPage = (): ReactElement => {
  const { id } = useParams();
  const { loading, data, error } = useItem(id);
  console.log('this is the id', id, data);
  return (
    <>
      <Page>
        <div className={cx('itemPage')}>
          {data && (
            <>
              <div className={cx('itemPage__details')}>
                <img src={data.item.picture} alt={data.item.title} />
                <h1>Descripción del producto</h1>
                <div>{data.description}</div>
              </div>
              <div className={cx('itemPage__summary')}>
                <div>{data.item.condition} - {/*data.item*/} vendidos</div>
                <h1>{data.item.title}</h1>
                <div>{'$'}{data.item.price.amount}</div>
                <Button>Comprar</Button>
              </div>
            </>
          )}
        </div>
      </Page>
    </>
  );
};

export default ItemPage;
