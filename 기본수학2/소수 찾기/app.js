let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(file,{encoding:"utf-8"}).split("\n")
let len=input.shift();
let cnt=0
input=input[0].split(" ").map(v=>{if(isPrime(+v))++cnt})

//56이 소수인가 아닌가?
function isPrime(n){

    let temp=parseInt(n/2)
    let isPrime=true
    if(n===1)return false;
    if(n===2)return true;
    while(temp>1){
        if(n%temp===0){
            isPrime=false;
            break;
        }
        temp--
    }

    return isPrime

}



console.log(cnt)