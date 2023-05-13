//getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
    let date = new Date(Date.now());
    
    return 3600 * date.getHours() + date.getMinutes() * 60 + date.getSeconds();
}

console.log( getSecondsToday() );