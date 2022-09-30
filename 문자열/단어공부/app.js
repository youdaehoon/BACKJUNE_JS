
// // //1번째 object로 key와 value저장 328ms
// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = fs.readFileSync(file, { encoding: "utf-8" }).trim();
// let len = input.length;
// let alpha
// let ans=""
// let cnt = 0;
// let temp = {};
// for (let i = 0; i < len; i++) {
//   alpha = input[i].toLowerCase();
//   if (temp[alpha]) {
//     temp[alpha] += 1;
//   } else {
//     temp = { ...temp, [alpha]: 1 };
//   }
// }
// for (char in temp) {
//   if (temp[char] > cnt) {
//     cnt = temp[char];
//     ans=char.toUpperCase();
//   }else if(temp[char] == cnt){
//     ans="?"
//   }
// }
// console.log(ans)

// // ************************ */

// 2번째 true false처럼 array 이용 188ms

let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).trim().toLowerCase();
let alpha=new Array(26).fill(0)
let idx,max
let ans=""
for(i=0;i<input.length;i++){
    idx=input.charCodeAt(i)-97
    ++alpha[idx]
    
}
max=Math.max(...alpha)
let maxCnt=alpha.filter(v=>v===max).length
if(maxCnt>1)ans="?"
else{
    ans=String.fromCharCode(alpha.indexOf(max)+97).toUpperCase()
}
console.log(ans)

