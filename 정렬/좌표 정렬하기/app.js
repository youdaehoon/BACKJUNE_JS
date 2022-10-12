let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).split("\n")
let len=input.shift();
console.log(input)
input=input.map(v=>v.split(" "))
console.log(input)