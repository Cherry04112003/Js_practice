//Создайте функцию-конструктор Calculator, которая которая создаёт объекты с тремя методами:
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта
//sum() возвращает сумму этих свойств
//mul() возвращает произведение этих свойств

function Calculator() {
    this.value1 = null,
    this.value2 = null,

    this.read = function() {
        this.value1 = Number(prompt('Введите первое значение'));
        this.value2 = Number(prompt('Введите второе значение'));
    },

    this.sum = function() {
        return this.value1 + this.value2;
    },

    this.mul = function() {
        return this.value1 * this.value2;
    }
}

let Calc = new Calculator();

Calc.read();

alert("Sum = " + Calc.sum() );
alert("Mul = " + Calc.mul() );