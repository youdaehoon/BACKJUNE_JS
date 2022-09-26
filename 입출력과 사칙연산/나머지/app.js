// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split(" ");
let A=+input[0]
let B=+input[1]
let C=+input[2]
function remainder(a,b){
return(parseInt(a%b))
}
console.log(remainder(A+B,C))
console.log(remainder(remainder(A,C)+remainder(B,C),C))
console.log(remainder((A*B),C))
console.log(remainder(remainder(A,C)*remainder(B,C),C))

