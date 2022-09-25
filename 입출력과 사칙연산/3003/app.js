// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync(__dirname + '/input.txt').toString().split(" ");
let temp=[1,1,2,2,2,8]
let answer=""
input.map((v,i)=>{answer+=temp[i]-v+" " })
answer=answer.slice(0, answer.length -1)

console.log(answer)