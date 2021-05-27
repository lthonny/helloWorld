// 2. You have a string aaabbdcccccf, transform it the following way => a3b2d1c5f1 ie: aabbaa -> a2b2a2 not a4b2


function transformString(arr) {
  const arrString = arr.split('');
  let stringСonversion = ''; 
  let letter = arrString[0]; // берем элементы по порядку [a, a, a, ]
  let counter = 1; // счетчик

  for (i = 1; i < arrString.length; i++) {
    if(arrString[i] === letter) { // если, первый элемент массива [1] ===
      counter += 1; // 2
    } else {
      stringСonversion +=  letter + counter; // строка + буква + количество 'a+a+2' 
      counter = 1;
      letter = arrString[i];
    }
  }

  stringСonversion += letter + counter;
  return stringСonversion;
}

console.log(transformString('aaabbdcccccf'));
console.log(transformString('aabbaa'));
console.log(transformString('aasabbdcccchsacf'));
console.log(transformString('aabsbaa'));








