const axios = require('axiosl').default;
const fs = require('fs/promises');

const getPokemonDataComTratamentoDeErro = async (id) => {
  let data;
  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    data = response.data
  } catch (error) {
    data = {error: "pokemon does not exist"}
  }
  await fs.writeFile(`data/${id}.json`, JSON.stringify(data));
  console.log(`já baixei os dados do pokemon ${id}`)
}

const getPokemonData = async (id) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  await fs.writeFile(`data/${id}.json`, JSON.stringify(response.data));
  console.log(`já baixei os dados do pokemon ${id}`);
}

const main = async () => {
  const promises = [1, 2, 3 , 4, 5 , 6, 7, 8, 9].map(id => getPokemonData(id))
  await Promise.all(promises)
  console.log("acabaram os downloads")
  console.log("acabou o programa")
}

main();