const books = require('./books');

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  let result = true;
  books.forEach((book) => {
      const firstAuthor = book.author.name;
     const firstBirth = book.author.birthYear;
     books.forEach((second) => {
         const secondAuthor = second.author.name;
         const secondBirth = second.author.birthYear;
         if (firstBirth === secondBirth && firstAuthor !== secondAuthor) {
            result = false; 
         }
      })
  })
  return result;
}
console.log(authorUnique());