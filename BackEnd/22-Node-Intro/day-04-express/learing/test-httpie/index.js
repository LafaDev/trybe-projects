const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  console.log(recipes);
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});
  res.status(200).json({message: 'Valid Token!'})
})

app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

  app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
  console.log(recipes);
});