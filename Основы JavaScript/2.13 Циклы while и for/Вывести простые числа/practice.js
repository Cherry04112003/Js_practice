//Напишите код, который выводит все простые числа из интервала от 2 до n/

let endOfRange = prompt('Задайте конец интервала');

outer: for (let i = 2; i < endOfRange; i++) {
    if (i == 2) {
        alert(i);
        continue;
    } 

    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue outer;
    }

    alert(i);
}