console.log('-----Задание №9-----')
obj = {a: 1, b: 10};

function deepEqual(var1, var2) {
  if (var1 == var2) { 
    return true;
  }
  if (var1 === null || var2 === null || typeof var1 !== 'object' || typeof var2 !== 'object') {  
    return false;
  }

  for (i in var1) {
    if (!(i in var2) || !deepEqual(var1[i], var2[i])) {
      return false;
    }
  }
  return true;
}

console.log(deepEqual(1, 10));
console.log(deepEqual(10, 10));
console.log(deepEqual(obj, {a: 1, b: 10}));
console.log(deepEqual(obj, {a: 1, b: 1}));


console.log('-----Задание №10-----')
array = [[1, 2, 3], [4, 5], [6, 7, 8, 9, 10]]
console.log(array.reduce(
    function(a, b) {
        return a.concat(b);  // Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
}, []));


console.log('-----Задание №11-----')
var ANCESTRY_FILE = JSON.stringify([  // Содержимое файла data.js
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
  ])


function average(array) {  // Часть кода из условия
    function plus(a, b) { 
        return a + b; 
    }
    return array.reduce(plus) / array.length;
}

ancestry = JSON.parse(ANCESTRY_FILE);  

var byName = {}; // Часть кода из условия
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

var difference = ancestry.filter(  // Метод filter создаёт новый массив со всеми элементами, прошедшими проверку
    function(person) {
      return byName[person.mother] != null;  // Если есть значение
    }).map(  // Метод map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
       function(person) {
         return person.born - byName[person.mother].born
       });
  
console.log(average(difference));


console.log('-----Задание №12-----')
var ancestry = JSON.parse(ANCESTRY_FILE);  // Используем данные из предыдущего задания и data.js

function average(array) { // Часть кода из условия
  function plus(a, b) { 
      return a + b; 
    }
  return array.reduce(plus) / array.length;
}


function differ(array, func){ 
  var age = {};
  array.forEach(function(person){  //Метод forEach выполняет указанную функцию один раз для каждого элемента в массиве
    var i = func(person);
    if( 
      age[i] == undefined // Переменная, не имеющая присвоенного значения, обладает типом undefined
      ){
      age[i] = [];
    }
    age[i].push(person) // Метод push добавляет один или более элементов в конец массива и возвращает новую длину массива
  });
  return age;
}


function century(person) {  // Округление и вычисление по столетию
  return Math.ceil(person.died / 100);
}


var a = differ(ancestry, century);
for (cent in a) {
  a[cent] = average( 
    a[cent].map(function(person)  // Метод map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
  { 
    return person.died - person.born 
  }));
  console.log(cent + ": " + a[cent] );
}

console.log('-----Задание №13-----')
function every(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (!b(a[i])){
      return false;
    }
  }
  return true;
}
function some(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (b(a[i])){
      return true;
    }
  }
  return false;
}
console.log(every([NaN, NaN, NaN], isNaN)); // Часть кода из условия
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));

console.log('-----Задание №8-----')
function arrayToList(array) {
  arr = null;
  for (i = array.length-1; i>=0; i--){
    arr = {
      value: array[i], 
      rest: arr
    };
  }
  return arr;
}


function listToArray(arr) {
  let array = [];
  while (arr != null){
    array.push(arr.value);
    arr = arr.rest;
  }
  return array;
}


function prepend(dob, arr) {
  spisok = {value: dob, rest: arr};
  return arr;
}


function nth(arr, num) {
  if (!arr) {
    return undefined;
  }
  else if (num == 0) {
    return arr.value;
  }
  else {
    return nth(arr.rest, num-1);
  }
}

a = arrayToList([1, 2, 3, 4, 5]);
console.log(a);
console.log(listToArray(a));
console.log(prepend(11, a));
console.log(nth(a, 5));
console.log(nth(a, 2));