 // Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens ,
 // faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

 // Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Laranja', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Coco', 'Melancia'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));