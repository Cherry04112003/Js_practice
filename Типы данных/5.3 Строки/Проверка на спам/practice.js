//Напишите функцию checkSpam(str), возвращающую ture, если str содержит 'viagra' или 'XXXXX', а иначе false.
//Функция должна быть нечувствительна к регистру

function checkSpam(str) {
    if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxxxx")) {
        return true;
    } else {
        return false;
    }
}

console.log( checkSpam("buy ViaGRa now!!!") );
console.log( checkSpam("free XXXXX watch in HD") );
console.log( checkSpam("Nexta live") );