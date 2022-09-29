// // 1st code*************************************//
// let input = +require("fs").readFileSync(__dirname + "/input.txt", {
//   encoding: "utf-8",
// });
// function sol(n) {
//   let temp;
//   let cnt = 99;
//   let num = 100;
//   if (n < 100) {
//     return n;
//   } else {
//     while (num <= n) {
//       temp = (num + "").split("").map(Number);
//       if (temp[0] + temp[2] === 2 * temp[1]) {
//         cnt++;
//       }
//       num++;
//     }
//     return cnt;
//   }
// }
// answer = sol(input);
// console.log(answer);
// // **************************************//

// 2nd
let fs=require("fs")
let path=process.platform==="linux"?0:__dirname+"/input.txt"
let input=fs.readFileSync(path,{encoding:"utf-8"})
let len=+input+1
function han(n){
    let temp
    let arr
    temp=n+"";
    if(temp.length<3)return true
    else{
        arr=temp.split("").map(Number)
        if(arr[0]+arr[2]===arr[1]*2){return true}
        else {return false}
    }
}

let answer=0
for(let i=1;i<len;i++){
    if(han(i))answer++
}
console.log(answer)
