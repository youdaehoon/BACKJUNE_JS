let input=require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"})
let num=+input;
for(let i=1;i<10;i++){
    console.log(num+" * "+i+" = "+num*i)
}