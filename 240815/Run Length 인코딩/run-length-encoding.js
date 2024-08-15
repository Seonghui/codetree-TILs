const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let answer = ''
let i = 0
while (i < input.length) {
    answer = answer + input[i]
    let count = 1
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] === input[j]) {
            count++
            i = j
        } else {
            break
        }
        
    }
    answer += count;
    i++
}
console.log(answer.length)
console.log(answer)