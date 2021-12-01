const books = require('./books');

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
     const fstFil = books.filter((books) => books.genre === 'Ficção Científica' || books.genre === 'Fantasia')
     return fstFil.map(({author}) => author.name).sort();
  }
  
  console.log(fantasyOrScienceFictionAuthors());