let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf8"}).trim().split("\n")
input.shift()
input=input.map(v=>v.split(" ")).sort((a,b)=>{
    if(a[1]==b[1])return +a[0]-b[0]
    else return +a[1]-b[1]
})
let ans=""
for(num in input){
ans+= input[num][0]+" "+input[num][1]+"\n"
}
console.log(ans)