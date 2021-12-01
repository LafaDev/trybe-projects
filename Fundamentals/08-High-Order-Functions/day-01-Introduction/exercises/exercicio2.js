const check = (first, second) => first === second; 

const ranNum = (numeroApostado, funcCheck) => {
  const lottery = Math.round((Math.random() * 4) + 1);
  console.log(lottery);
  return funcCheck(numeroApostado, lottery) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(ranNum(2, check));