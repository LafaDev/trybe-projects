// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

//
console.log("");
console.log("1 - ");
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
// Valor esperado no console:
// Bem-vinda, Margarida
console.log("Bem vinda, " + info.personagem);
//

//
console.log("");
console.log("2 - ");
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, 
  // em seguida, imprima o objeto no console. Valor esperado no console:
// {
//  personagem: 'Margarida',
//  origem: 'Pato Donald',
//  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//  recorrente: 'Sim'
//
info.recorrente = "Sim";
console.log(info);
//

//
console.log("");
console.log("3 - ");
// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente
for (key in info) {
  console.log(key);
};
//

//
console.log("");
console.log("4 - ");
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim
for (key in info) {
  console.log(info[key]);
}
//

console.log("");
console.log("5 - ");
// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
  // 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
  // Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
    // Margarida e Tio Patinhas
    // Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
    // Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
    // Ambos recorrentes // Atenção para essa última linha!

let infoPatinhas = {
  personagem: 'Tio Patinhas',
  origem: "Christimas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
  if (key === 'recorrente' && info[key] === 'Sim' && infoPatinhas[key] === 'Sim') {
    console.log("Ambos recorrentes")
  } else {
    console.log(info[key] + " e " + infoPatinhas[key]);
  }
}





