const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


// o terceiro é uma função que checa 
// se a resposta está correta
// e faz a contagem da pontuação final recebida pela pessoa estudante. 

// Ao final a HOF deve retornar o total da contagem de respostas certas.

const verify = (first, second) => {
    let counter = 0;
    for (let i = 0; i < STUDENT_ANSWERS.length; i++) {
        if (second[i] === 'N.A') {
          continue;
        } else if (first[i] === second[i]) {
           counter += 1; 
        } else if (first[i] !== second[i]) {
            counter -= 0.5;
        }
    }
    return counter
}

const answersChecker = (gabarito, toVerify, func) => {
  const counter = func(gabarito, toVerify);
  return counter;
}

console.log(answersChecker(RIGHT_ANSWERS, STUDENT_ANSWERS, verify));