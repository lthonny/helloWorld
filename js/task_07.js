// 7. В футбол играет 2 команды. Некто ставит ставку на счет в матче, например 1:2.
// Если человек угадывает точный счет, то получает большой приз. Если угадывает исход матча 
// (выигрыш той или иной команды или ничью), то получает маленький приз. Если не угадывает, то не получает ничего.
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


// I love football после, такой задачи я полюбил футбол

const score = ['3 : 1', '1 : 2'];

function calculatePrize(input) { // ['2 : 1', '5 : 1']
    const supposedScore = input[0]; // '2 : 1' 2-A
    const realScore = input[1]; // '5 : 1'

    const supposedScoreGameResult = getGameResult(supposedScore);
    const realScoreGameResult = getGameResult(realScore)

    if (supposedScore === realScore) {
        return 2;
    } 
    // no max reward

    if (supposedScoreGameResult === realScoreGameResult ) {
        return 1;
    } 

    return 0;   
}


function getGameResult(score) { // узнаем какая команда выигрывает
    const scoreByTeam = score.split(':');
    const scoreA = parseInt(scoreByTeam[0], 10); // STRING  num - 2
    const scoreB = parseInt(scoreByTeam[1], 10);  // STRING num - 1

    if (scoreA > scoreB) {
        return 'A';
    } else if (scoreA < scoreB) {
        return 'B';
    } else {
        return 'D';
    }
}

const testCases = [
    {input: ['1 : 2', '3 : 2'], output: 0},
    {input: ['2 : 1', '1 : 2'], output: 0},
    {input: ['5 : 4', '1 : 1'], output: 0},
    {input: ['1 : 2', '2 : 3'], output: 1},
    {input: ['3 : 2', '5 : 2'], output: 1},
    {input: ['2 : 2', '3 : 3'], output: 1},
    {input: ['2 : 2', '2 : 2'], output: 2},
    {input: ['3 : 2', '3 : 2'], output: 2},
];

testCases.forEach((testCase) => {
    const {input, output} = testCase;
    const realOutput = calculatePrize(input);
    console.log(`
    input: ${input} test result: ${realOutput} - ${output}
    `);
})





