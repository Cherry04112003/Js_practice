//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и
//так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает
//"европейский" день недели для даты date.

function getLocalDay(date) {
    switch(date.getDay()) {
        case 0:
            return 7;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
    }
}

let date = new Date(2023, 4, 15);

console.log( getLocalDay(date) );