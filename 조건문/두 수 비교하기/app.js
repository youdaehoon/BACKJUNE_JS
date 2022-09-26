// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split(" ");
let A=+input[0]
let B=+input[1]

function sol(A,B){
A>B?console.log(">"):A==B?console.log("=="):console.log("<")
}
sol(A,B)