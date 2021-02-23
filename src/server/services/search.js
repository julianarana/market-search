const constants = require('./constants');
const fetch = require('node-fetch');

const search = (q) => {
  const url = new URL(`${constants.BASE_URL}/sites/MLA/search`);
  url.search = new URLSearchParams({ q }).toString();
  return fetch(url.toString())
    .then((response) => response.json())
    .then((response) => {
      return {
        data: {
          items: response.results.map((responseItem) => ({
            condition: responseItem.condition,
            free_shipping: responseItem.shipping.free_shipping,
            id: responseItem.id,
            picture: responseItem.thumbnail,
            price: {
              amount: responseItem.installments?.amount,
              currency: responseItem.installments?.currency_id,
              decimals: 0,
            },
            title: responseItem.title,
            location: responseItem.seller_address.state.name,
          })),
        },
      };
    })
    .catch((error) => {
      console.error('This error should be handled better', error);
      return { data: { items: [] } };
    });
};

module.exports = search;
