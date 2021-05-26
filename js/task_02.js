// 2. You have a string aaabbdcccccf, transform it the following way => a3b2d1c5f1 ie: aabbaa -> a2b2a2 not a4b2
const arrString = 'aabbaa';
const newArrayString = arrString.split('');  // массив

// const result = newArrayString.reduce((accumlator, current) => {
//     console.log(current);
//     return (typeof accumlator[current] !== 'undefined') 
//       ? { ...accumlator, [current]: accumlator[current] + 1 } 
//       : { ...accumlator, [current]: 1 }
// }, {})

console.log(result);