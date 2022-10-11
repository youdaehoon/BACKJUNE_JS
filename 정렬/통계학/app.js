let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).trim().split("\n").map(Number)

let len=input.shift()
input.sort((a,b)=>b-a)
let avg=Math.ceil(input.reduce((acc,cur)=>acc+cur,0)/len)
let median=input[Math.ceil(len/2)]+input[Math.floor(len/2)]/2
let scope=input[0]-input[len-1]

let countObj={}
for(let i=0;i<len;i++){
    if(countObj[input[i]]){
        ++countObj[input[i]]
    }else{
        countObj[input[i]]=1
    }

}
console.log(countObj)
console.log(input)
console.log(avg,scope,median)