const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
const len = Number(input[0])
const char = input[input.length - 1]

let totalLength = 0;
let count = 0
for (let i = 1; i <= len; i++) {
    if (input[i][0] === char) {
        totalLength = totalLength + input[i].length
        count++
    }
}
console.log(count, (totalLength / count).toFixed(2))