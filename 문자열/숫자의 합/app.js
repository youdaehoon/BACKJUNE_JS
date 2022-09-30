let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).split("\n")
input.shift()
let answer=input[0].split("").map(Number).reduce((acc,cur)=>acc+cur,0)
console.log(answer)