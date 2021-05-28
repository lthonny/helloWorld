// 3. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел 
// пропущено (остальные встречаются ровно по одному разу). N заранее неизвестно. Определить пропущенное число.

const incompleteArray = [1, 2, 3, 4, 5, 6, 8]; // массив с недостающим числом
const newArr = [];

function getMissedNumber(input){
    const incompleteArrayLength = input.length;
    const completeArrayLenght = incompleteArrayLength + 1; // длина массива
    const completeArray = Array.from(Array(completeArrayLenght), (_, i) => i + 1); // массив N

    completeArray.forEach(element => {
        if (input.indexOf(element)) {
            console.log(element);
        }
    });


    // const result = input.filter(e => completeArray.indexOf(e) !== -1).length === completeArray.length;
    // console.log(result)



    // console.log(completeArray);
    return;
}

getMissedNumber(incompleteArray);


// function diff(aString, nString) {
//     if (aString !== nString) {
//         aString.forEach(element => {
//             console.log(element);
//         });
//     }
    

// }


// function diff(aString, nString) {
//     return aString.filter(i => !nString.includes(i))
//     .concat(nString.filter(i => !aString.includes(i)))
// }



// console.log(diff(incompleteArray, fullArray));

// ...........................



