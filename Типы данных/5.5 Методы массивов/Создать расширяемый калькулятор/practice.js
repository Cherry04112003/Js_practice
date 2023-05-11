//Создайте функцию конструктор Calculator, которая создаёт расширяемые объекты калькулятора.
//Задание состоит из двух частей:
//1.
//Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате
//"ЧИСЛО оператор ЧИСЛО" (раздельно пробелами) и возвращает результат. Метод должен понимать 
//плюс + и минус -.

//2.
//Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он
//принимает оператор name и функцию с двумя аргументами func(a, b), которая описывает его.


function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }

    this.calculate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}