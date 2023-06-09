//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: ПН, ВТ
//СР, ЧТ, ПТ, СБ, ВС.

function getWeekDay(date) {
    switch(date.getDay()) {
        case 0:
            return 'ВС';
            
        case 1:
            return 'ПН';
            
        case 2:
            return 'ВТ';
            
        case 3:
            return 'СР';
            
        case 4:
            return 'ЧТ';
            
        case 5:
            return 'ПТ';
            
        case 6:
            return 'ВС';
            
    }
}

let date = new Date(2023, 4, 15);

console.log( getWeekDay(date) );
