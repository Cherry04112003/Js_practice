// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку
// или нажмёт "Отмена".
// Подсчитывает и возвращает сумму элементов массива.

function sumInput() {

    let arr = [0];

    while (true) {
        let temp = prompt("Введите значение.");
        if (temp === "" || temp === null || isNaN(temp)) {
            break;
        } else {
            arr.push(+temp);
        }
    }

    return arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
}

console.log( sumInput([1, 2, 3, 4]) );

