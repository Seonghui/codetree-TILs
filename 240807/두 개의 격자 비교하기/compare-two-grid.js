const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

const [n, m] = input[0].split(' ').map(Number)
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

const arr1 = []
const arr2 = []

for (let i = 1; i < 5; i++) {
    arr1.push(input[i].split(' '))
    arr2.push(input[i + 4].split(' '))
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
            arr2d[i][j] = 1
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr2d[i].join(' '))
}