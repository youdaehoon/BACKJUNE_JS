// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split('\n');
let A=+input[0]
let B=+input[1]
let sum=0;
let i=0
function sol(A,B){
    let temp=B;
    let mul=A*(B%10);
   
     sum=sum+mul*Math.pow(10,i)
     i++
    console.log(mul)
    temp=parseInt(temp/10);
    if(temp===0)console.log(sum)
    else{sol(A,temp)}
}
sol(A,B)
