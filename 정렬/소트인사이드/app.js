let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"})
let ans=input.split("").sort((a,b)=>b-a).join("")
console.log(ans)