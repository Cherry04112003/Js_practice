//Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b/

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function getMin(a, b) {
    if (a > b) {
        return b;
    } else if (a < b) {
        return a;
    } else {
        return a; //В случае a === b без разницы, что возвращать
    }
}