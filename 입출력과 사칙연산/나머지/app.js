// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split(" ");
let A=+input[0]
let B=+input[1]
let C=+input[2]
console.log(parseInt((A+B)%C))
