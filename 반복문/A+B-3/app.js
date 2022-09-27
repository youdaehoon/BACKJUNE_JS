let input = require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"}).split("\n")
let len=+input[0];
let A,B,temp
for(let i=0;i<len;i++){
temp=input[i+1].split(" ").map(Number)
A=temp[0];
B=temp[1];
console.log(A+B)
}
