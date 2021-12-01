const books = require('./books');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge() {
    const authors = books.map((books) => (books.releaseYear) - (books.author.birthYear));
    return authors.reduce((acc, curr, index) => (index === authors.length - 1) ? (acc + curr) / authors.length : acc + curr);
}

console.log(averageAge());