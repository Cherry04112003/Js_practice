//Давайте произведём 5 операций с массивом.
//1. Создайте массив styles с элементами "Джаз" и "Блюз".
//2. Добавьте "Рок-н-ролл" в конец.
//3. Замените значение в середнине на "Классика".
//4. Удалите первый элемент массива и покажите его.
//5. Вставьте Рэп и Регги в начало массива.

let styles = ["Джаз", "Блюз"];

console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[1] = "Классика";
console.log(styles);
console.log( styles.shift() );
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);