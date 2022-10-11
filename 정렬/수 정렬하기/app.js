let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).trim().split("\n").map(Number)
input.shift()
input.sort((a,b)=>a-b)
console.log(input.join("\n"))