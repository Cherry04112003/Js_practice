//Создайте функцию trnucate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
//заменяет конец str на "..." , так, чтобы её длина стала равна max length.
//Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "...";
    } else {
        return str;
    }
}


console.log( truncate("Евгений", 5) );
console.log( truncate("Компьютер", 4) );
console.log( truncate("Телефон", 7) );
console.log( truncate("Алфавит", 100) );