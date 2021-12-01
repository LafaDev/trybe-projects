const books = require('./books');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
    return books.find((books) => {
        return books.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3;
    }).name;
}

console.log(authorWith3DotsOnName());