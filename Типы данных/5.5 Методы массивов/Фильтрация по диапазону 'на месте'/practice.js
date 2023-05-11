//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть проверка имеет вид a <= arr[i] <= b.
//Функция должна изменять принимаемый массив и ничего не возвращать.
 

function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length;) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6];
filterRangeInPlace(arr, 0, 10)
console.log( arr );

arr = [1, 2, 3, 4, 5, 6];
filterRangeInPlace(arr, 2, 5);
console.log( arr );

arr = [1, 2, 3, 4, 5, 6];
filterRangeInPlace(arr, 1, 3);
console.log( arr );

arr = [1, 2, 3, 4, 5, 6];
filterRangeInPlace(arr, 1, 5);
console.log( arr );

arr = [1, 2, 3, 4, 5, 6];
filterRangeInPlace(arr, 5, 7);
console.log( arr );