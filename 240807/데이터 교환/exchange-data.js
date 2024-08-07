let a = 5
let b = 6
let c = 7

let temp1
let temp2

temp1 = b
b = a

temp2 = c
c = temp1

a = temp2

console.log(a)
console.log(b)
console.log(c)