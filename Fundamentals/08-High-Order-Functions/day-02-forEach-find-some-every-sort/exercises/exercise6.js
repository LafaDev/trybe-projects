const books = require('./books');

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear < 1990 && book.releaseYear > 1979);
}

console.log(someBookWasReleaseOnThe80s());