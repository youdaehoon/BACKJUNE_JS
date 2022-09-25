// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split('\n');
let temp=input[0].split(" ").map((v)=>+v);
let A=temp[0]
let B=temp[1]
console.log(A+B)
console.log(A-B)
console.log(A*B)
console.log(parseInt(A/B))
console.log(A%B)