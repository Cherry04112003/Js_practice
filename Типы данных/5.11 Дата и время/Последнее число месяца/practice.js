//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда
//это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {    
    for (i = 31; i > 27; i--) {
        let date = new Date(year, month);
        date.setDate(date.getDate() + i);

        if (date.getMonth() === month) {
            return date.getDate();
        }
    }
}

console.log( getLastDayOfMonth(2023, 4) );