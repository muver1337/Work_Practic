// Вывести все уникальные символы из строки 'DDADSADASDAAADS'
let findUnique = 'DDADSADASDAAADS';

// Создаём Set для хранения уникальных значений
let unique = new Set();

// Переборка строки по символам
for (let char of findUnique){
    if (!unique.has(char)){
        unique.add(char);
    }
}

// Преобразовываем массив уникальных значений в строку
let uniqueString = Array.from(unique).join('');

// Вывод в консоль
console.log("Task 1 :", uniqueString);

