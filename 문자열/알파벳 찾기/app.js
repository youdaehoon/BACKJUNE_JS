let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"})
let ascNum=97
let ans=""
while(ascNum<=122){
ans+=input.indexOf(String.fromCharCode(ascNum))+" "
ascNum++
}
ans.trim()
console.log(ans)