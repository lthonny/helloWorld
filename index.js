// 2. You have a string aaabbdcccccf, transform it the following way => a3b2d1c5f1 ie: aabbaa -> a2b2a2 not a4b2
const arrString = 'aaabbdcccccf';

// 3. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено (остальные встречаются ровно по одному разу). N заранее неизвестно. Определить пропущенное число.

// 4. В последовательности записаны целые числа. Одно из чисел встречается ровно один раз, остальные — по два раза. Найти число, которое встречается один раз.
const arrNumber = [1, 2, 2, 3, 4, 4, 5, 5, 3];

let newArray = arrNumber.filter((item) => {
    const counter = 1;
    return item.length > counter;
});

console.log(newArray);

// const newArray = arrNumber.reduce((total, current) => {
//     return current + total;
// })
// arrNumber.forEach((value) => {
//     return arrNumber[value] = (arrNumber[value] || 0) + 1;
// })

console.log(arrNumber);


// arrNumber.filter(item => {
//     return item.length > item.length;
// })


// 5. isPalindrome(“racecar”); //true
// isPalindrome(“table”); //false
// isPalindrome(“А роза упала на лапу Азора”’); //true

// split() разбивает объект String на массив [i n s p i r i t]
// reverse() переворачивает элементы массива [i n s p i r i t] = [t i r i p s n i]
// join() объединяет все элементы массива [tiripsni]

//старый формат записи
function isPalindrom(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrom('racecar'));

//новый формат записи
const isPalindrom = (str) => str === str.split('').reverse().join('');
console.log(isPalindrom('racecar'));


// 6. Написать функцию, которая принимает на вход 2 строки и проверяет являются ли входные строки анаграммами.
// isAnagram('friend', 'Finder'); //true
// isAnagram('hello', 'bye'); //false

// 7. В футбол играет 2 команды. Некто ставит ставку на счет в матче, например 1:2.
// Если человек угадывает точный счет, то получает большой приз. Если угадывает исход матча (выигрыш той или иной команды или ничью), то получает маленький приз. Если не угадывает, то не получает ничего.
// Написать функцию, которая принимает на вход предсказанный счет и реальный счет (например, массив вида [“1 : 2”, “3 : 2”]) и возвращает 
// 0 - не получает ничего
// 1 - маленький приз
// 2 - большой приз

// Примеры:
// [“1 : 2”, “3 : 2”] => 0
// [“2 : 1”, “1 : 2”] => 0
// [“5 : 4”, “1 : 1”] => 0
// [“1 : 2”, “2 : 3”] => 1
// [“3 : 2”, “5 : 2”] => 1
// [“2 : 2”, “3 : 3”] => 1
// [“2 : 2”, “2 : 2”] => 2
// [“3 : 2”, “3 : 2”] => 2




