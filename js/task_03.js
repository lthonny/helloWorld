// 3. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел 
// пропущено (остальные встречаются ровно по одному разу). N заранее неизвестно. Определить пропущенное число.

function getMissedNumber(input) {
    const incompleteArrayLength = input.length; // length not complete arr
    const completeArrayLenght = incompleteArrayLength + 1; // length full arr
    const completeArray = Array.from(Array(completeArrayLenght), (_, i) => i + 1); // arr [1.........N]

    for (let i = 0; i < completeArray.length; i++){
        if (input.indexOf(completeArray[i]) == -1) { 
            return completeArray[i]; // arr [i] != full arr
        }
    } 
}

// test cases
const testCases = [
    { input: [1, 2, 3, 4, 5, 6, 8] },
    { input: [8, 7, 6, 5, 4, 2, 1] },
    { input: [1, 7, 10, 3, 4, 5, 6, 8] },
    { input: [1, 2, 3, 4, 5, 6, 9, 8, 10] },
    { input: [12, 10, 8, 9, 6, 7, 5, 4, 3, 2, 1] },
];

testCases.forEach((testCase) => {
    const {input} = testCase;
    const missedNumber = getMissedNumber(input);
    console.log(`
        input: ${input} test result: ${missedNumber}
    `);
})