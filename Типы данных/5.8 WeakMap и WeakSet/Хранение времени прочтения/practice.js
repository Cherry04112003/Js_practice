// Есть массив сообщений такой же, как и в предыдущем задании.
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения
// информации о том, когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения да или нет. Теперь же нам
// нужно сохранить дату, и она должна исчезнуть из памяти при удалении сборщиком мусора сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date.

function checking(messages, readMessages) {
    if (readMessages.has(messages[0])) {
        messages.shift();
    }
}

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  console.log( messages.length );

let readMessagesWithDate = new WeakMap();

readMessagesWithDate.set(messages[0], new Date().toString().split(" ", 5).join(" "));
readMessagesWithDate.set(messages[1], new Date().toString().split(" ", 5).join(" "));

checking(messages, readMessagesWithDate);
checking(messages, readMessagesWithDate);

console.log( messages.length );


