let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("\n")
input.shift()
input=input[0].split(" ").map(Number)
let setInput=[...new Set(input)]
let ans=""
let cnt
for(let idx in input){
    cnt=0
    setInput.map((v)=>{
        
        if(v <input[idx])++cnt
    })
    ans+=cnt+" "
}
console.log(ans.trim())