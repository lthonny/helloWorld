// 4. В последовательности записаны целые числа. Одно из чисел встречается ровно один раз, остальные — по два раза. Найти число, которое встречается один раз.
// case tests
const arrNumber1 = [1, 2, 2, 3, 4, 4, 5, 5, 3, 9, 1];
const arrNumber2 = [1, 3, 4, 4, 5, 3, 9, 9, 1];

const accum = {};

function accumObj(arr) {
    arr.forEach(item => {
        if (accum[item] === undefined) {
            accum[item] = 1;
        } else {
            accum[item] = accum[item] + 1;
        }
    });
}

accumObj(arrNumber1);


(function receivingKeyValue() {
    Object.entries(accum).filter(([key, value]) => {
        if (value == 1) {
            console.log(`'Key': ${key} , 'value': ${value}`);
        }
    });
})();



// optimized

const singleNumber = function(nums) {
    let uniq = new Set(); // save no repeat numbers
    let uniqSum = 0; // sum no repeat numbers
    let numSum = 0; // sum all numbers
    
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (!uniq.has(current)) {
            uniq.add(current);
            uniqSum += current;
        }
        numSum += current;
    }
    return uniqSum * 2 - numSum;
};

// test cases
const testCases = [
    { input: [1, 1, 2, 2, 3]},
    { input: [4, 3, 2, 2, 3, 5, 5]},
    { input: [4, 1, 0, 1, 3, 4, 3]},
    { input: [9, 1, 2, 9, 3, 4, 3, 2, 1, 5, 5]},
    { input: [5, 1, 1, 2, 2, 4, 8, 4, 3, 3, 5]},
];

testCases.forEach((testCase) => {
    const {input} = testCase;
    const noRepeatNumber = singleNumber(input);
    console.log(`
        input: ${input} no repeat result: ${noRepeatNumber};
    `);
})
