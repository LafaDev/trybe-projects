function fluxo(par1, par2, par3) {
  return new Promise((resolve, reject) => {
    if(typeof par1 !== 'number' || typeof par2 !== 'number' || typeof par3 !=='number') {
      return reject(new Error("Informe apenas números"))
    }
    const result = ((par1 +par2) * par3);
    (result < 50) ? reject(newError("Valor muito baixo")) : resolve(result);
  });
};

module.exports =  fluxo;