const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: 'pong' })
})

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}`})
})

app.post("/greeting", (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) res.status(201).json({ message: `Hello, ${name}`})
  if (Number(age) <= 17 || !age) res.status(401).json({ message: "Unauthorized"})
})

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res.status(201)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.listen(3001, () => console.log("alohomora"))