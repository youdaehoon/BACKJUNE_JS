let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).trim().split("\n")
input.shift()
input.sort()
input.sort((a,b)=>a.length-b.length)
let ans= [...new Set(input)].join("\n")
console.log(ans)