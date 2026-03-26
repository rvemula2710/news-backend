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

  if (q) {
    url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`;
  } else {
    url = `url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=${API_KEY}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
