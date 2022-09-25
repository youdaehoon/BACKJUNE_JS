// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split('\n');
let temp=input[0].split(" ").map(v=>+v)
const sol=temp[0]/temp[1]
console.log(sol)