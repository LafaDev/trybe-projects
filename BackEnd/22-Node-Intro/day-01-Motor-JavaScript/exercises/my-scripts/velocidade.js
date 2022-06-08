const readline = require('readline-sync');

const distancia = readline.questionFloat("Digite a distancia, em metros: ");
const tempo = readline.questionInt("Digite o tempo, em segundos: ")
const velocidadeMedia = (distancia / tempo);
console.log(`a velocidade média é ${velocidadeMedia} m/s`);