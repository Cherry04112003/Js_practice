//У нас есть объект salaries с зарплатами:
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//Создайте функцию topSalary(salaries), которая возвращает имя самого высокоооплачиваемого
//сотрудника.
//Если объект salaries пустой, то нужно вернуть null.
//Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log( topSalary(salaries) );