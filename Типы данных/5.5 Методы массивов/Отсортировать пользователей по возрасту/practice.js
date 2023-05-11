//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(arr) {
    arr.sort(compareObjAge);
}

function compareObjAge(obj1, obj2) {
    if (obj1.age > obj2.age) return 1;
    if (obj1.age == obj2.age) return 0;
    if (obj1.age < obj2.age) return -1;
}

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let arr = [vasya, petya, masha];

console.log("Массив до сортировки:");
arr.forEach(console.log);
sortByAge(arr);
console.log("Массив после сортировки:");
arr.forEach(console.log);


