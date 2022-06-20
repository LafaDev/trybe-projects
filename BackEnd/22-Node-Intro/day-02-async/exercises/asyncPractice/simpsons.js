const fs = require('fs').promises;

async function readFiles() {
  const fileContent = await fs.readFile(`./simpsons.json`, 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach(element => console.log(element));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenOne = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenOne) {
    throw new Error('id não encontrado');
  }
  return chosenOne;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  console.log(newArray);
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function simpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  // console.log(simpsons);
  const family = simpsons.filter((simpson) => simpson.id <= 4 && simpson.id !== 0);
  // console.log(family);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
}

async function main() {
  readFiles();
  const simpson = await getSimpsonById(3);
  console.log(simpson);
  filterSimpsons();
  simpsonsFamily();
};

main();