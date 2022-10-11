let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).trim().split("\n")
let [lenth,rank]=input.shift().split(" ").map(Number)
let sortedArr=input[0].split(" ").map(Number).sort((a,b)=>b-a)
console.log(sortedArr[rank-1])