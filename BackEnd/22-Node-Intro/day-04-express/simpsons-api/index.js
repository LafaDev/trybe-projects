const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const readData = async () => {
  let simpsons;
  try {
    const data = await fs.readFile("./simpsons.json", 'utf-8')
    simpsons = JSON.parse(data);
  } catch (error) {
    console.log(error.message);
    simpsons = false;
  }
  return simpsons
};

const writeData = async (newData) => {
  await fs.writeFile('./simpsons.json', JSON.stringify(newData));
}

app.get('/simpsons', async (_req, res) => {
  const data = await readData();
  if (!data) res.status(500).json({ message: "Internal Server Error" });
  res.status(200).json(data);
})

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readData();
  if (!data) res.status(500).json({ message: "Internal Server Error" });
  const simpson = data.find(e => e.id === id)
  if (!simpson) res.status(404).json({ message: "simpson not found" })
  res.status(200).json(simpson);
})

app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    
    const data = await readData();
    if (data.some(e => e.id ===id))
      res.status(409).json({ message: "id already exists" });

    data.push({ id, name })
    await writeData(data);

    res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

// app.post('/simpsons', async (req, res) => {
//   const { id, name } = req.body;
//   if (data.some(e => e.id ===id))
//     res.status(409).json({ message: "id already exists" });
  
//   const data = await readData();
//   if (!data) res.status(500).json({ message: "Internal Server Error" })

//   data.push(...{ id, name})
  
//   try {
//     await writeData(data);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
//   res.status(204).end();
// })

app.listen(3001, () => console.log("alohomora"));