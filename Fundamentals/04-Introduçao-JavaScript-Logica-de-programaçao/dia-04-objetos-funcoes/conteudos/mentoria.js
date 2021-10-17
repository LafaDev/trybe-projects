// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// perimetro = (2*base) + (2*altura)
// area = base * altura

function quadrilatero (base, altura) {
    let perimetro = (base * 2) + (altura * 2);
    let area = base * altura;

    let resultado = {
        resultadoArea: area,
        resultadoPerimetro: perimetro,
    }
    return resultado;
};
console.log(quadrilatero(2, 4));

// 1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares 
// e ímpares no formato: 
// { pares: 0,
// impares: 0 } */
let arrNumInt = [7, 5, 3, 1, 9, 0, 2, 4, 6, 8];
function qntParImpar (arrNumInt) {
    let objSeparador = {
        pares: 0,
        impares: 0,
    }
    for (let i of arrNumInt) {
        if (i%2  === 0) {
            objSeparador.pares += 1;
        } else {
            objSeparador.impares += 1;
        }
    }
    return objSeparador;
}
console.log(qntParImpar(arrNumInt));