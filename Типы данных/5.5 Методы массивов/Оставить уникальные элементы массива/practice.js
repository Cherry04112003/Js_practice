//Пусть arr — массив строк.
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.


function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1;) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    return arr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );