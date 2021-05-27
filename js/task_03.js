// 3. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел 
// пропущено (остальные встречаются ровно по одному разу). N заранее неизвестно. Определить пропущенное число.
const incompleteArray = [1, 2, 3, 4, 5, 6, 8]; // массив с недостающим числом

const N = incompleteArray[incompleteArray.length - 1]; // получение N
const fullArray = Array.from(Array(N), (_, i) => i + 1); // массив от [1.....N]

function diff(aString, nString) {
    return aString.filter(i => !nString.includes(i))
    .concat(nString.filter(i => !aString.includes(i)))
}

console.log(diff(incompleteArray, fullArray));

// ...........................



