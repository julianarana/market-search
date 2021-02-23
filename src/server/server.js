const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const searchApi = require('./api/search');
const itemApi = require('./api/item');
app.use(cors());
app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/items', searchApi.search);
app.get('/api/items/:id', itemApi.item);
