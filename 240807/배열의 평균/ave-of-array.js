const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const row = 2;
const col = 4;

let arr2d = [];
let answer1 = [];
let answer2 = [];
let answer3 = 0

for (let i = 0; i < row; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < row; i++) {
    let sum = 0
    for (let j = 0; j < col; j++) {
        sum += arr2d[i][j]
        answer3 += arr2d[i][j]
    }
    answer1.push((sum / col).toFixed(1))
}

for (let i = 0; i < col; i++) {
    const sum = arr2d[0][i] + arr2d[1][i]
    answer2.push((sum / row).toFixed(1))
}

console.log(answer1.join(' '))
console.log(answer2.join(' '))
console.log((answer3 / (row * col)).toFixed(1))