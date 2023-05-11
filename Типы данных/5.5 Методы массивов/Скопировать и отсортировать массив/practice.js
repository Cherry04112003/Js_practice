//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
    return arr.slice().sort();
}

let arr1 = ['HTML', 'JavaScript', 'CSS'];
let arr2 = ['Пересдать', 'Нужно', 'Социологию'];

console.log( copySorted(arr1) );
console.log( copySorted(arr2) );