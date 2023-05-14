// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user1 = {
    name: "Василий Иванович",
    age: 35
};

let user1InJSON = JSON.stringify(user1);
let user2 = JSON.parse(user1InJSON);

console.log( user1 );
console.log( user1InJSON );
console.log( user2 );