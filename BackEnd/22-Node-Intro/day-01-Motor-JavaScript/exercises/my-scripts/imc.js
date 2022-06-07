const readline = require('readline-sync');

const altura = readline.questionInt("Digite sua altura, em centimetros: ");
const peso = readline.questionInt("Digite seu peso, em kilos: ");

const imc = (peso / (altura / 100) ** 2).toFixed(2);
console.log(`seu IMC é ${imc}`);