const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerro'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const emailGen = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
   return {nome, email: `${email}@trybe.com` } 
  }

  console.log(newEmployees(emailGen));