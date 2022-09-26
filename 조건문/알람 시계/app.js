let input=require("fs").readFileSync(__dirname+"/input.txt",{encoding:"utf-8"}).split(" ").map(Number)
let [hour,min]=input

function sol(hour,min){
    let tempM=min-45;
    let tempH=hour;
    if(tempM<0){
        --tempH
        tempM+=60;
        if(tempH<0)tempH+=24
    }
    console.log(tempH,tempM)

}
sol(hour,min)