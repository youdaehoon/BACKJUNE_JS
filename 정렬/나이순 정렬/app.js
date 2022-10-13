let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("\n")
input.shift()
input=input.map(v=>v.split(" ")).sort((a,b)=>{
    if(+a[0]==+b[0])return 0
    else{return +a[0]-b[0]}
})
let ans=""
for(el in input){
ans+=input[el][0]+" "+input[el][1]+"\n"
}
console.log(ans)
