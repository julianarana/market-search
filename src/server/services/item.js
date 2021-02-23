const { BASE_URL } = require('./constants');
const fetch = require('node-fetch');

const getItem = (id) => {
  const url = `${BASE_URL}/items/${id}`;
  const descriptionPromise = getItemDescription(id);
  const itemPromise = fetch(url);

  return Promise.all([itemPromise, descriptionPromise])
    .then(async ([item, description]) => {
      const itemJson = await item.json();
      return {
        data: {
          description,
          item: {
            condition: itemJson.condition,
            free_shipping: itemJson.shipping?.free_shipping,
            id: itemJson.id,
            location: itemJson.seller_address.state.name,
            picture: itemJson.pictures[0]?.url,
            price: {
              amount: itemJson.price,
              currency: itemJson.currency_id,
              decimals: 0,
            },
            title: itemJson.title,
          },
        },
      };
    })
    .catch((error) => {
      console.error('This error should be handled better', error);
      return { data: { item: null } };
    });
};

const getItemDescription = (id) => {
  const url = `${BASE_URL}/items/${id}/description`;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response.plain_text)
    .catch((error) => {
      console.error('This error should be handled better', error);
      return '';
    });
};

module.exports = getItem;
