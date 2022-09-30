let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).split(" ")
console.log(input)
let num1=""
let num2=""
for(let i=0;i<3;i++){
    num1=input[0][i]+num1
    num2=input[1][i]+num2
}
let ans=num1>num2?num1:num2
console.log(ans)