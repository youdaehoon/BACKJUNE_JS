let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).trim().split("\n").map(Number)

let len=input.shift()
input.sort((a,b)=>b-a)
let avg=Math.round(input.reduce((acc,cur)=>acc+cur,0)/len)
let median=input.length==1?input[0]:input[Math.floor(len/2)]
let scope=input[0]-input[len-1]

let countObj={}

for(let i=0;i<len;i++){
    if(countObj[input[i]]){
        ++countObj[input[i]]
    }else{
        countObj[input[i]]=1
    }

}
let max= Math.max(...Object.values(countObj))
let maxArr=[]
for(let num in countObj){
    if(countObj[num]==max){
        maxArr.push(num)
    }
}
maxArr=maxArr.map(Number).sort((a,b)=>a-b)
let mode=maxArr.length==1?maxArr[0]:maxArr[1]
let ans=[]
ans.push(avg)
ans.push(median)
ans.push(mode)
ans.push(scope)
console.log(ans.join("\n"))