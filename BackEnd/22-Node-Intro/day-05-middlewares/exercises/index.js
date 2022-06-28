const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const handleErrors = require('./handleErrors');
const generateToken = require('./generateToken')
const app = express();
app.use(bodyParser.json());

const currentToken = generateToken();

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone)
    return res.status(401).json({ message: "missing fields" });
  res.status(200).json({ token: currentToken });
})

const authentication = (req, res, next) => {
  const { token } = req.headers;
  if (!token || token.length !== 16 || token !== currentToken)
    return res.status(401).json({ message: "Token inválido!" });
  next();
}

app.use(authentication);

app.post('/sales', handleErrors, (_req, res) => {
  // const { productName, infos } = req.body;
  res.status(201).json({ message: "Venda cadastrada com sucesso" });
});


app.listen(3001, () => console.log('alohomora'));