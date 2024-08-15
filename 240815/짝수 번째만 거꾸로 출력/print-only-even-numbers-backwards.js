const fs = require("fs");
let str = fs.readFileSync(0).toString().trim();
const answer = []

for (let i = 0; i < str.length - 1; i++) {
    if (i % 2 === 0) {
        answer.push(str[i + 1])
    }
}

console.log(answer.reverse().join(''))