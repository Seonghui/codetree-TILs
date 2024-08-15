const fs = require("fs");
let char = fs.readFileSync(0).toString().trim();

const arr = ["apple", "banana", "grape", "blueberry", "orange"];
const answer = [];

for (let item of arr) {
    if (item[2] === char || item[3] === char) {
        answer.push(item);
    }
}

for (let ans of answer) {
    console.log(ans);
}

console.log(answer.length);