// //** 메모리 초과 */
// let fs=require("fs")
// let file=process.platform=="linux"?0:__dirname+"/input.txt"
// let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("\n")
// input.shift()
// input=input[0].split(" ").map(Number)
// let setInput=[...new Set(input)]
// let ans=""
// let cnt
// for(let idx in input){
//     cnt=0
//     setInput.map((v)=>{
        
//         if(v <input[idx])++cnt
//     })
//     ans+=cnt+" "
// }
// console.log(ans.trim())
// //** */

let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("\n")
input.shift()
input=input[0].split(" ").map(Number)

const setArr=[...new Set(input)].sort((a,b)=>a-b)
let obj={}
setArr.map((v,i)=>obj[v]=i)
let ans=[]
for(let idx in input){
ans.push(obj[input[idx]])
}
console.log(ans.join(" "))

