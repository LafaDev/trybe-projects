document.querySelector('body').style.backgroundColor = 'black';
// Acesse o elemento elementoOndeVoceEsta .
let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
ondeEstou.parentNode.style.color = 'red';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. 
// Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').textContent = 'Lorem ipsum dolor sit amet';
// Acesse o primeiroFilho a partir de pai .
console.log(document.querySelector('#pai').firstElementChild);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(ondeEstou.previousElementSiblin);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(ondeEstou.nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(ondeEstou.nextElementSibling)
// Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector('#pai').children[2]);