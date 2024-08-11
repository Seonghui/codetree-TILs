const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

let num = 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        arr2d[j][i] = num;
        num++
    }
}

for (let a of arr2d) {
    console.log(a.join(' '))
}