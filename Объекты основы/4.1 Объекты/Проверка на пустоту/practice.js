//Напишите функцию isEmpty(obj), которая возвращает ture, если у объекта нет свойств, иначе false

let testObj1 = {
    name: "Finn",
    surname: "Mertens",
    sex: "Male",
    age: 16
};

let testObj2 = {};

console.log( isEmpty(testObj1) );
console.log( isEmpty(testObj2) );

function isEmpty(obj) {
    for (let prop in obj) {
        if (obj[prop] !== undefined) {
            return false;
        }
    }

    return true;
}