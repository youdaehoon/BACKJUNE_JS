let input=require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"})

console.log(+input*(+input+1)/2)