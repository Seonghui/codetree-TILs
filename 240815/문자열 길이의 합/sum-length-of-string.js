const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
const len = input[0]
let totalLen = 0
let count = 0

for (let i = 1; i <= len; i++) {
    if (input[i][0] === 'a') {
        count++
    }
    totalLen = totalLen + input[i].length
}

console.log(totalLen, count)