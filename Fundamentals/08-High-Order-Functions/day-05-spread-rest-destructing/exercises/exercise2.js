// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

const sum = (...values) => values.reduce((acc, curr) => acc + curr, 0); 

console.log(sum(2, 5, 5, 2, 6));
console.log(sum(10, 30, 5, 5));