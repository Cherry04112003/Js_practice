//Какое последнее значение выведет этот код? Почему?


let i = 3;

while (i) {
    alert(i--);
}

//Выведет 1, так как в саму функцию alert будет передано старое значение переменной, а ей присвоено новое, то есть 9.
//В итоге следующее условие вернёт false так как 0 в логическом представлении равно false, в итоге будет выход из цикла