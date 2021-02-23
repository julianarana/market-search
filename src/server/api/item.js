const itemService = require('../services/item');

const item = async (req, res) => {
  const id = req.params.id;
  /*if(!req.query.q){
    return res.json({});
  }*/
  const response = await itemService(id);
  console.log("the response", response);
  return res.send(response);
};

module.exports = {
  item,
};
