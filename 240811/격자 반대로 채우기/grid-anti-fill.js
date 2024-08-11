const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

let num = 1
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
         for (let j = n - 1; j >= 0; j--){
            arr2d[j][n - i - 1] = num
            num++
        }
    } else {
        for (let j = 0; j < n; j++) {
            arr2d[j][n - i - 1] = num
            num++
        }
    }
}

for (let a of arr2d) {
    console.log(a.join(' '))
}