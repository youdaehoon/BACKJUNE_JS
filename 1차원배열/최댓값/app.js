let input= require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"}).split("\n").map(Number)
let max=Math.max(...input)
let idx
input.map((v,i)=>{if(v==max)idx=i+1})
answer=""+max+"\n"+idx
console.log(answer)
