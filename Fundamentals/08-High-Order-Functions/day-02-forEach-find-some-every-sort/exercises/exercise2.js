const books = require('./books');

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
    let nameBook;
    books.forEach((book) => {
        if(!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        } 
    }
    );
    return nameBook;
  }

//   console.log(books[1].name)
  console.log(smallerName());
