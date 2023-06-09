//Есть массив сообщений:
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
//У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые
//сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.
//Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа
//на вопрос было ли сообщение прочитано? Структура должна быть подходящей, чтобы можно было
//однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.
// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.
//P.P.S. Нам не следует модифицировать сами объекты сообщений,добавлять туда свойства. Если сообщения
// принадлежат какому-то другому коду, то жто может привести к плохим последствиям.

function checking(messages, readMessages) {
    if (readMessages.has(messages[0])) {
        messages.shift();
    }
}

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

console.log( messages.length );

let readMessages = new WeakSet();

//Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
//readMessages содержит 2 элемента

checking(messages, readMessages);
console.log( messages.length );

checking(messages, readMessages);
console.log( messages.length );






