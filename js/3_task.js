// Создание переменной "dim" с типом строки
let dim = 'дим';
let palindroma1 = dim + dim.split('').reverse().join('').substring(1);

// Создание переменной "manek" с типом строки
let manek = 'манек';
let palindroma2 = manek + manek.split('').reverse().join('').substring(1);

// Создание переменной "rota" с типом строки
let rota = 'рота';
let palindroma3 = rota + rota.split('').reverse().join('').substring(1);

// Вывод всех палиндром
console.log("Task 3 :", palindroma1, palindroma2, palindroma3);
