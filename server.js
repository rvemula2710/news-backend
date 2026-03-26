const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

app.get('/news', async (req, res) => {
  const category = req.query.category || '';
  const q = req.query.q || '';

  let url = '';

 const url = `https://newsapi.org/v2/everything?q=apple&sortBy=publishedAt&pageSize=10&language=en&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
console.log(data);
  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
