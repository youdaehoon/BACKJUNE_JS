let input=require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"}).split("\n")
let num=+input[0]
let arr=input[1].split(" ").map(Number)
let max=Math.max(...arr)
let answer=arr.reduce((acc,cur)=>acc+=cur/max*100,0)
console.log(answer/num)