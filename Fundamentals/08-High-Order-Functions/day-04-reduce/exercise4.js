const books = require('./books');

// 4 - Encontre o livro com o maior nome.

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  function longestNamedBook() {
      return books.reduce((acc, curr) => (curr.name.length > acc.name.length) ? acc = curr : acc);
  }

  console.log(longestNamedBook());