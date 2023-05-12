//Напишите функцию count(obj), которая возвращает количество свойств объекта
//Постарайтесь сделать код как можно короче.
//P.S. Игнорируйте символьные свойства, подсчитывайте только обычные.


function count(obj) {
    let count = 0;

    for (let key of Object.keys(obj)) {
        count++;
    }

    return count
}

let user = {
    name: 'John',
    age: 30
  };

console.log( count(user) );