const searchService = require('../services/search');

const search = async (req, res) => {
  const query = req.query;
  if (!req.query.q) {
    return res.json({});
  }
  const response = await searchService(req.query.q);
  return res.send(response);
};

module.exports = {
  search,
};
