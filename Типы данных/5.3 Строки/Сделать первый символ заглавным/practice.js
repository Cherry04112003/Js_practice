//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}


console.log( ucFirst("юрий Дудь") );
console.log( ucFirst("fACE") );
console.log( ucFirst("гоша Рубчинский") );
console.log( ucFirst("полесГУ") );
console.log( ucFirst("бГУИР") );
console.log( ucFirst("болото") );