const readline = require('readline-sync');
const winMessage = "Parabéns, número correto!";
const failMessage = "Opa, não foi dessa vez. O número era %s.";

const verify = (num1, num2) => (num1 === num2) ? console.log(winMessage) : console.log(failMessage, num1);

function sorteio() {
  const aleatNum = parseInt(Math.random() * 11, 10);
  const answer = readline.questionInt("Digite um número de 0 a 10: ");
  verify(aleatNum, answer);

  if (readline.keyInYNStrict('Deseja jogar novamente?')) {
    sorteio();
  } else {
    console.log("Obrigado por jogar!");
  }
};

sorteio();

