//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элеметны со значениями больше или равными а и меньше или равными b и возвращает результат в виде массива.
//Функция должна возвращать новый массив и не изменять исходный.


function filterRange(arr, a, b) {
    let resultArray = arr.filter(
        (item) => item >= a && item <= b ? true : false);
    return resultArray;
}

let arr = [5, 3, 8, 1, 4, 2.5];

let filtered = filterRange(arr, 1, 4);
console.log( filtered );
filtered = filterRange(arr, 4, 4);
console.log( filtered );
filtered = filterRange(arr, 0, 1);
console.log( filtered );
filtered = filterRange(arr, -1, 100);
console.log( filtered );
filtered = filterRange(arr, 4, 8);
console.log( filtered );