const express = require('express');

const app = express();
app.use(express.json());

let names = ['Alisson', 'Kendi', 'Kohatsu'];

app.get('/names', (req, res) => {
  return res.status(200).json(names);
});

app.get('/names/:name', (req, res) => {
  const { name } = req.params;
  const findedName = names.find(findName => findName === name);
  return res.status(200).json({ name: findedName });
});

app.post('/names', (req, res) => {
  const { name } = req.body;
  names.push(name);
  return res.status(201).json(names);
});

app.listen(3333, () => {
  console.log('Server is running...');
});