//Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от
//даты date.
//К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и
//getDateAgo(new Date(), 2) — восемнадцатое.
//Функция должна надёжно работать при значении days=365 и больших значениях

function getDateAgo(date, days) {
    let resultDate = new Date(date.getTime() - days * 86400000);
    return resultDate.getDate();
}

let date = new Date(2023, 4, 15);

console.log( getDateAgo(date, 4) );