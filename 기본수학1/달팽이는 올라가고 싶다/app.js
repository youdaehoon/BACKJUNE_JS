let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).split(" ").map(Number)
let [go,back,height]=input
//height<(go-back)*(n-1)+go
let ans=(height-go)/(go-back)+1
ans=Math.ceil(ans)
console.log(ans)