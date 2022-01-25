const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNight = (lesson, period) => lesson.turno = period
const listKeys = (object) => Object.keys(object)
const objectSize = (obj) => Object.keys(obj).length
const listValues = (o) => Object.values(o)

addNight(lesson2, 'noite');
listKeys(lesson3)
objectSize(lesson3)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons)

const allStudents = (obj) => {
    let total = 0
    const array = Object.keys(obj)
    for (i in array) {
        total += obj[array[i]].numeroEstudantes
    }
    return total
} 

const getValueByNumber = (obj, num) => {
    const arr = Object.values(obj);
    return arr[num];
}

const verifyPair = (obj, key, value) => key in obj && obj[key] === value  

console.log(allStudents(allLessons))
console.log(getValueByNumber(lesson1, 0))
console.log(verifyPair(lesson2, 'materia', 'História'))

const mathStudents = (obj) => {
  total = 0
  const array = Object.keys(obj)
  for (x in array) {
    if (obj[array[x]].materia === 'Matemática')
    total += obj[array[x]].numeroEstudantes
  }
    return total
}
console.log(mathStudents(allLessons))

const createReport = (obj, nome) => {
  let materias = []
  for (let prop in obj) {
    if (obj[prop].professor === nome) {
      materias.push(obj[prop].materia)
    }
  }
  const report = {}
  report.professor = nome; 
  report.aulas = materias;
  report.estudantes = allStudents(allLessons)
  return report;
}


console.log(createReport(allLessons, 'Maria Clara'))