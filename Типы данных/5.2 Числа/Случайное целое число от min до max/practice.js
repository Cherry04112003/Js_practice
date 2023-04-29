//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно)

//Любое число из интервала min..max должно появлятся с одинаковой вероятностью

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

console.log( randomInteger(0, 5) );
console.log( randomInteger(1, 2) );
console.log( randomInteger(1, 2) );
console.log( randomInteger(12, 100) );