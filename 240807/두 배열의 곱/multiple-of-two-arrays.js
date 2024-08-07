const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
const arr1 = [input[0].split(' '),input[1].split(' '),input[2].split(' ')]
const arr2 = [input[4].split(' '),input[5].split(' '),input[6].split(' ')]


for (let i = 0; i < 3; i++) {
    const answer = []
    for (let j = 0; j < 3; j++) {
        answer.push(arr1[i][j] * arr2[i][j])
    }
    console.log(answer.join(' '))
}