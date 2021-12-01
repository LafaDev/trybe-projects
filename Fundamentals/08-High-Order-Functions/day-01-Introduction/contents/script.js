const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar cafe!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (func) => func();

console.log(doingThings(wakeUp));
console.log(doingThings(coffee));
console.log(doingThings(sleep));