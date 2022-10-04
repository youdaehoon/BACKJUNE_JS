let fs=require("fs")
let file=process.platform=="linux"?0:__dirname+"/input.txt"
let input=+fs.readFileSync(file,{encoding:"utf-8"})
let n=1;
let range=1
let num,den

function sol(number){

    while(number>range){
        n++
        range=n*(n+1)/2
    }
    num=number-(n-1)*n/2
    den=n-num+1
    if(n%2==1){
        [num,den]=[den,num]
    }
    return num+"/"+den
    

}
let ans=sol(input)
console.log(ans)


