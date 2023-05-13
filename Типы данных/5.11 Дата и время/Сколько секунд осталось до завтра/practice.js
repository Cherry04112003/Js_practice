//Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
    let date1 = new Date(Date.now());
    let date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate() + 1);

    return Math.floor((date2.getTime() - date1.getTime()) / 1000);
}

console.log( getSecondsToTomorrow() );