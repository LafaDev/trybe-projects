// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) => 
      acc + curr.split('').reduce((accu, curren) => {
        if (curren === 'A' || curr === 'a') {return accu + 1};
        return accu;
      }, 0) , 0)
  }

  console.log(containsA());