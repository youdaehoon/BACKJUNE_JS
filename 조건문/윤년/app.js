//'/dev/stdin'
let input=require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"})
let A=+input
function sol(A){
    if(parseInt(A%4)==0&&(parseInt(A%100)!==0||parseInt(A%400)==0)){
        console.log("1")
    }else{console.log("0")}
    
}
sol(A)