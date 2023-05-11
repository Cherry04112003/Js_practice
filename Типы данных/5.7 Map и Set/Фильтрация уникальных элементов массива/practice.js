//Допустим, у нас есть массив arr.
//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений
//массива arr.

function unique(arr) {
    return Array.from(new Set(arr));
}

let array = [1, 2, 3, 4, 4, 4, 2, 6];
console.log( unique(array) );