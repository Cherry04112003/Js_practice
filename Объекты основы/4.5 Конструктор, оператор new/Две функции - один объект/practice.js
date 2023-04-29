//Возможно ли создать функции A и B, чтобы new A() == new B()?
//Если да — приведите пример вашего кода

let globalObj = {
    name: "Object"
};

function A() {
    return globalObj;
}

function B() {
    return globalObj;
}

let a = new A();
let b = new B();

console.log(a.name);
console.log(b.name);