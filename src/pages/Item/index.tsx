import React, { ReactElement, useMemo } from 'react';
import classnames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { Page, Button, ButtonStyle } from '../../components';
import { useItem } from '../../Store/useItem';
import { formatPrice } from '../../utils';
import styles from './ItemPage.module.scss';

const cx = classnames.bind(styles);

const ItemPage = (): ReactElement => {
  const { id } = useParams();
  const { loading, data, error } = useItem(id);

  const [integerAmount, decimalAmount] = useMemo(() => {
    if (data?.item?.price.amount) {
      return formatPrice(data?.item.price.amount);
    }
    return ['', ''];
  }, [data?.item.price.amount]);

  return (
    <>
      <Page>
        <div className={cx('itemPage')}>
          {data && (
            <>
              <div className={cx('itemPage__details')}>
                <img
                  className={cx('itemPage__img')}
                  src={data.item.picture}
                  alt={data.item.title}
                />
                <h1>Descripción del producto</h1>
                <div className={cx('itemPage__description')}>
                  {data.description}
                </div>
              </div>
              <div className={cx('itemPage__summary')}>
                <div>
                  {data.item.condition === 'new' ? 'Nuevo': ''} - {/*data.item*/} vendidos
                </div>
                <h2>{data.item.title}</h2>
                <div className={cx('itemPage__price')}>
                  {'$ '}{integerAmount}<sup>{decimalAmount}</sup>
                </div>
                <Button
                  className={cx('itemPage__button')}
                  fullWidth
                  buttonStyle={ButtonStyle.ACTION}
                >
                  Comprar
                </Button>
              </div>
            </>
          )}
        </div>
      </Page>
    </>
  );
};

export default ItemPage;
