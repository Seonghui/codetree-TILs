const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = 4
let answer = 0

for (let i = 0; i < n; i++) {
    const arr = input[i].split(' ')
    for (let j = 0; j < n; j++) {
        answer += Number(arr[j])
    }
    console.log(answer)
    answer = 0
}