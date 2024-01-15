let string = 'hello alexandr!';

// Разбиваем переменную "string" на слова
let parse = string.split(' ');

// Создаем новый массив, где каждый элемент заменяется символами из первого элемента
let resultArray = parse.map(element => {
    // Создаем строку, состоящую из первой буквы
    let changeString = element[0].repeat(element.length);
    return changeString;
});

//преобразуем полученный массив в строку
let answer = resultArray.join(' ');

console.log("Task 2 :", answer);

