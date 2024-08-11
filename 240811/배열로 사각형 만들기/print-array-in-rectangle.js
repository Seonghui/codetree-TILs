const n = 5
let arr2d = Array(5).fill(1).map(() => Array(5).fill(1));

for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        arr2d[i][j] = arr2d[i - 1][j] + arr2d[i][j - 1]
    }
}

for (let a of arr2d) {
    console.log(a.join(' '))
}