const readline = require("readline-sync");

options = ['imc', 'velocidade', 'sorteio'];

function main(){
  const question = readline.keyInSelect(options, 'Qual script você deseja usar?')
  if(question === -1) {
    console.log('bye bye :D');
    process.exit(0);
  } else {
    console.log(`Hmmm... ok, aqui vai o script de ${options[question]} pra você!`);
    require(`./${options[question]}.js`);
  }
};

main();