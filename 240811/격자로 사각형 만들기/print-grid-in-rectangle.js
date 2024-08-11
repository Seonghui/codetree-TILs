const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let arr2d = Array(n).fill(1).map(() => Array(n).fill(1));

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++){
        arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i][j - 1] + arr2d[i - 1][j]
    }
}

for (let row of arr2d) {
    console.log(row.join(' '))
}