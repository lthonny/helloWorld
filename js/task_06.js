// 6. Написать функцию, которая принимает на вход 2 строки и проверяет являются ли входные строки анаграммами.
// isAnagram('friend', 'Finder'); //true
// isAnagram('hello', 'bye'); //false

// Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель. 
// toLowerCase() возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.
// тернарные выражения (/\s+/g, '') - удаление пробельных символов s(space) - пробелы, g - global

function isAnagram(str1, str2) {
    const newStr1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join();
    const newStr2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join();
    return newStr1 === newStr2;
}

console.log(isAnagram('friend','Finder'));
console.log(isAnagram('hello','bye'));
console.log(isAnagram('НИАВД','ДИВАН'));
console.log(isAnagram('ракыш','КРЫША'));