const fs = require("fs");
let input = fs.readFileSync(0).toString();

let answer = ''
let i = 0
while (i < input.length - 1) {
    let count = 1
    answer = answer + input[i]
    for (let j = i + 1; j < input.length; j++) {
        if (input[i] === input[j]) {
            i++
            count++
        } else {
            i = j
            break
        }
        
    }
    answer = answer + count
}
console.log(answer.length)
console.log(answer)