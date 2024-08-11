const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
        arr2d[i][j] = 1
    }
}

for (let i = 1; i < n; i++) {
    for (let j = 1; j < i + 1; j++) {
        arr2d[i][j] = arr2d[i - 1][j - 1] + arr2d[i - 1][j]
    }
}

for (let row of arr2d) {
    console.log(row.filter(item => item !== 0).join(' '))
}