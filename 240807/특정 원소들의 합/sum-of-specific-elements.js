const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr2d = [];
let answer = 0;

let n = 4;
for (let i = 0; i < n; i++) {
    arr2d.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        answer += arr2d[i][j]
    }
}

console.log(answer);