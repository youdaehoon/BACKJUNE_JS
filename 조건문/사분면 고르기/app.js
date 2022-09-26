//'/dev/stdin'
let input=require("fs").readFileSync(__dirname+`/input.txt`,{encoding:'utf-8'}).split("\n")
let x=+input[0]
let y=+input[1]

function sol(x,y){
    if(x>0&&y>0)console.log("1")
    if(x<0&&y>0)console.log("2")
    if(x<0&&y<0)console.log("3")
    if(x>0&&y<0)console.log("4")
}
sol(x,y)