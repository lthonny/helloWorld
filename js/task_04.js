// 4. В последовательности записаны целые числа. Одно из чисел встречается ровно один раз, остальные — по два раза. Найти число, которое встречается один раз.
// case tests
const arrNumber1 = [1, 2, 2, 3, 4, 4, 5, 5, 3, 9, 1];
const arrNumber2 = [1, 3, 4, 4, 5, 3, 9, 9, 1];
// const arrNumber3 = [3, 4, 4, 5, 5];
// const arrNumber4 = [1, 2, 1];

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



// РАЗОБРАТЬ TASKS 



