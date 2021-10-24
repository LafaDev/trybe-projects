document.querySelector('body').style.backgroundColor = 'black';
let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
ondeEstou.parentNode.style.color = 'red';
document.querySelector('#primeiroFilhoDoFilho').textContent = 'Lorem ipsum dolor sit amet';
console.log(document.querySelector('#pai').firstElementChild);
console.log(ondeEstou.previousElementSibling);
console.log(ondeEstou.nextSibling)
console.log(ondeEstou.nextElementSibling)
console.log(document.querySelector('#pai').children[2]);
// 1
let pai = document.querySelector('#pai');
let irmaoOndeEstou = document.createElement('section');
irmaoOndeEstou.id = 'irmaoOndeEstou';
pai.appendChild(irmaoOndeEstou);
// 2
let filhoOndeEstou = document.createElement('section');
filhoOndeEstou.id = 'filhoOndeEstou';
ondeEstou.appendChild(filhoOndeEstou);
// 3
let primeiroFilhodoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhodoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
// 4
filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
