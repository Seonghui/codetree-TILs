const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let string = input[0];
let char = input[1];
let count = 0

for (let c of string) {
    if (c === char) {
        count++
    }
}

console.log(count++)