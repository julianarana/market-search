const itemService = require('../services/item');

const item = async (req, res) => {
  const id = req.params.id;
  const response = await itemService(id);
  return res.send(response);
};

module.exports = {
  item,
};
