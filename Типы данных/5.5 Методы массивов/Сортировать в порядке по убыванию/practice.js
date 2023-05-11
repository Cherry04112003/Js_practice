//let arr = [5, 2, 1, -10, 8];
//... ваш код для сортировки по убыванию
//alert(arr); // 8, 5, 2, 1, -10

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

function reverseCompare(arr) {
    arr.sort(compareNumeric).reverse();
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [22, 3, -100, 43, 0];
let array3 = [1, 4, 1, 7, 7];
let array4 = [5, 6, -6, -6, 5];

console.log(`array1 до сортировки по убыванию: ${array1}`)
console.log(`array2 до сортировки по убыванию: ${array2}`)
console.log(`array3 до сортировки по убыванию: ${array3}`)
console.log(`array4 до сортировки по убыванию: ${array4}`)

reverseCompare(array1);
reverseCompare(array2);
reverseCompare(array3);
reverseCompare(array4);

console.log(`\narray1 после сортировки по убыванию: ${array1}`)
console.log(`array2 после сортировки по убыванию: ${array2}`)
console.log(`array3 после сортировки по убыванию: ${array3}`)
console.log(`array4 после сортировки по убыванию: ${array4}`)