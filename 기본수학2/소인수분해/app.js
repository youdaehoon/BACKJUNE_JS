let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=+fs.readFileSync(file,{encoding:"utf-8"})

let num=input
let arr=[]


function sol(input,num){
    let temp=2;
    if(input==1) return;
    if(input==2){
        return console.log(2)
    }

    
    while(true){
    while(num%temp==0){
        console.log(temp)
        arr.push(temp)
        input=input/temp
    }
    temp++
    // console.log(temp)
    if(temp>parseInt(num/2)+2)break;
    }
}

sol(input,num)
console.log(arr.join("\n"))