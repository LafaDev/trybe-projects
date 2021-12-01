const books = require('./books');

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu',
  ];
  
  function oldBooks() {
      const currentYear = new Date().getFullYear();
      const oldOnes = books.filter((books) => (currentYear - books.releaseYear) > 60);
      return oldOnes.map(({name}) => name);
  }

  console.log(oldBooks());
