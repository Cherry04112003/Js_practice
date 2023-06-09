//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName
// - состоит из name и surname

let vasya = {name: "Вася", surname: "Пупкин", id: 1};
let petya = {name: "Петя", surname: "Иванов", id: 2};
let masha = {name: "Маша", surname: "Петрова", id: 3};

let users = [vasya, petya, masha];
let usersMapped = users.map(function(obj) {
    let objMapped = {fullName: obj.name + " " + obj.surname, id: obj.id};
    return objMapped;
});

console.log( usersMapped[0] );
console.log( usersMapped[1] );
console.log( usersMapped[2] );