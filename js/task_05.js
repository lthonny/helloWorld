// 5. isPalindrome(“racecar”); //true
// isPalindrome(“table”); //false
// isPalindrome(“А роза упала на лапу Азора”’); //true

// split() разбивает объект String на массив [i n s p i r i t]
// reverse() переворачивает элементы массива [i n s p i r i t] = [t i r i p s n i]
// join() объединяет все элементы массива [tiripsni]

function normalaze(str) {
    return str.replace(/\s+/g, '').toLowerCase();
}

function isPalindrom(str) {
    const normalizedString = normalaze(str); 
    const reverce = normalizedString.split('').reverse().join('');
    return normalizedString === reverce;
}

console.log(isPalindrom('А роза упала на лапу Азора'));
console.log(isPalindrom('racecar'));
console.log(isPalindrom('кабак'));
console.log(isPalindrom('мадам'));
console.log(isPalindrom('r2cecaasdsa2r'));
console.log(isPalindrom('А роза упала на лапу Азора '));


