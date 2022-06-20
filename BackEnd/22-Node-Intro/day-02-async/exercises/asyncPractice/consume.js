const fluxo = require('./fluxo');

const randomNumb = () => {
  return Math.floor(Math.random() * 100 + 1);
};

async function consume() {
  const selection = Array.from({length: 3}).map(randomNumb);
  console.log(selection);
  try {
    const result = await fluxo(...selection);
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
};

consume();