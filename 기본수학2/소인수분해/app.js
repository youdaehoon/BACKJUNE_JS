// //**400ms */
// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = +fs.readFileSync(file, { encoding: "utf-8" }).trim();
// let arr = [];
// let temp=2
// let num=input
// let ans = "";
// while (true) {
//   if (input == 1) break;
//   if(input==2){
//     arr.push(2)
//     break;
//   }
//   while(input%temp==0){
//     arr.push(temp)
//     input=input/temp
//   }
 
//   if(temp>parseInt(num/2)+1){
//     break;
//   }
//   temp++


// }
// if(arr.length==0&&num!==1){
//     arr.push(num)
// }
// ans=arr.join("\n")
// num!==1&&console.log(ans);
// //** */

//**모범답안 if문이 while에 있으니 평가가 많다. */
let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = +fs.readFileSync(file, { encoding: "utf-8" }).trim();
let arr=[];
let primeNum=2;

while(input!=1){

    if(input%primeNum==0){
        arr.push(primeNum)
        input=input/primeNum
    }else{
        primeNum++
    }
}
arr.length==0
let ans=arr.join("\n")
console.log(ans)