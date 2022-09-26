//'/dev/stdin'
let input=require("fs").readFileSync(__dirname+`/input.txt`,{encoding:'utf-8'})
let A=+input;

function sol(A){

    if(A>=90){console.log("A")}
    else if(A>=80)console.log("B")
    else if(A>=70)console.log("C")
    else if(A>=60)console.log("D")
    else(console.log("F"))
}
sol(A)