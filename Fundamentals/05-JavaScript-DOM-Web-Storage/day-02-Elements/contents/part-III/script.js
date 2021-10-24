document.querySelector('body').style.backgroundColor = 'black';
let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
ondeEstou.parentNode.style.color = 'red';
document.querySelector('#primeiroFilhoDoFilho').textContent = 'Lorem ipsum dolor sit amet';
console.log(document.querySelector('#pai').firstElementChild);
console.log(ondeEstou.previousElementSibling);
console.log(ondeEstou.nextSibling)
console.log(ondeEstou.nextElementSibling)
console.log(document.querySelector('#pai').children[2]);
let pai = document.querySelector('#pai');
let irmaoOndeEstou = document.createElement('section');
irmaoOndeEstou.id = 'irmaoOndeEstou';
pai.appendChild(irmaoOndeEstou);
let filhoOndeEstou = document.createElement('section');
filhoOndeEstou.id = 'filhoOndeEstou';
ondeEstou.appendChild(filhoOndeEstou);
let primeiroFilhodoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhodoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// Remova todos os elementos filhos de paiDoPai 
// exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let paiDoPai = document.querySelector('#paiDoPai');
for (i = 0; i < paiDoPai.childElementCount; i += 1) {
    let currentChild = paiDoPai.children[i];
    if (currentChild.id !== 'pai') {
        currentChild.remove();
    }
}
for (y = 0; y < ondeEstou.children.childElementCount; y += 1) {
    let currentChild = ondeEstou.children[i];
    if (currentChild.id !== 'primeiroFilhoDoFilho') {
        currentChild.remove();
    }
}