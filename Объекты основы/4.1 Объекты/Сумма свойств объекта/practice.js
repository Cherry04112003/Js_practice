//У нас есть объект, в котором хранятся зарплаты нашей команды
let salaries1 = {
    John: 100,
    Ann: 160,
    Pete: 130
};

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
//Должно получиться 390

//Если объект salaries пуст, то результат должен быть 0
let salaries2 = {};

showSumOfSalaries(salaries1);
showSumOfSalaries(salaries2);

function showSumOfSalaries(obj) {
    let sum = 0;

    for (let prop in obj) {
        sum += obj[prop];
    }

    console.log(sum);
}

