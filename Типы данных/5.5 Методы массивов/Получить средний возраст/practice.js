//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и 
//возвращает средний возраст.


function getAverageAge(users) {
    return users.reduce((sum, current) => sum +  current) / users.length;
}

let vasya = {name: 'Вася', age: 25};
let petya = {name: 'Петя', age: 30};
let masha = {name: 'Маша', age: 29};

let arr = [vasya.age, petya.age, masha.age];

console.log( getAverageAge(arr) );