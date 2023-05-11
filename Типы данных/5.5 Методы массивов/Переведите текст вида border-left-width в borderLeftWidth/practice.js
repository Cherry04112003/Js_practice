// Напишите функцию camelize(str), которая преобразует строки вида my-short-string в myShortString.
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    let array = str.split('-');

    for (i = 0; i < array.length; i++) {
        if (i === 0) continue;
        // let item = array[i];
        array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    }

    return array.join('');
} 

console.log( camelize('oh-my-gosh!') );
console.log( camelize('-web-tool-xxl') );
console.log( camelize('use-goto-keyword!') );
console.log( camelize( "don't-listen-to-VLP") );