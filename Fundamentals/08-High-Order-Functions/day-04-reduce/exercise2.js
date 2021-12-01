const books = require('./books');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
    const authors = books.map((books) => books.author.name);
    return string = authors.reduce((acc, curr, index) => (index === authors.length - 1) ? `${acc}, ${curr}.` : `${acc}, ${curr}`);
}

console.log(reduceNames());