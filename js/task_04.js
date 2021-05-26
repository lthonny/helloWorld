// 4. В последовательности записаны целые числа. Одно из чисел встречается ровно один раз, остальные — по два раза. Найти число, которое встречается один раз.
const arrNumber = [1, 2, 2, 3, 4, 4, 5, 5, 3, 9, 1];
const accum = {
    
};

arrNumber.forEach(item => {
    if (accum[item] === undefined) {
        accum[item] = 1;
    } else {
        accum[item] = accum[item] + 1;
    }
});

// for (let value of Object.values(accum)) { // узнали значение 
//     if (value == 1) {   // которое встречается одни раз
//         console.log(value);
//         for (let key of Object.keys(accum)) {
//             if ()
//         }
//     }
// }


console.log(Object.entries(accum).filter(([key, value]) => {
    if (value = 1) {
        console.log(key, value);
    }
}));



console.log(accum); // [ 1, 2, 3, 4, 5, 9 ]
