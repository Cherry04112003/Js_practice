//Создайте объект calculator (калькулятор) с тремя методами:
//read() (чиать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений
//mul() (умножить) перемножает сохранённые значения и возвращает результат

let calculator = {
    value1 : null,
    value2 : null,

    read() {
        this.value1 = Number(prompt('Введите первое значение'));
        this.value2 = Number(prompt('Введите второе значение'));
    },

    sum() {
        return this.value1 + this.value2;
    },

    mul() {
        return this.value1 * this.value2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );