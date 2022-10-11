// //**에라토스의 체 504ms */

// let fs=require("fs")
// let file=process.platform=="linux"?0:__dirname+"/input.txt"
// let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split("\n").map(Number)

// function sol(num){
// let lastNum=num*2;
// let isPrime=new Array(lastNum+1).fill(true);
// isPrime[1]=false;
// for(let i=2;i<=Math.ceil(Math.sqrt(lastNum));i++){

//     if(isPrime[i]){
//         let m=2;
//         while(m*i<=lastNum){
//             isPrime[i*m]=false
//             m++
//         }

//     }
// }
// let ans=[]
// for(let j=num+1;j<=lastNum;j++){
// if(isPrime[j]){
//     ans.push(j)
// }
// }

// return ans.length
// }

// input.pop();
// let ans=input.map(v=>sol(v)).join("\n")
// console.log(ans)
// //** */


//**에라토스의 체 업그레이드 */


let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs
  .readFileSync(file, { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map(Number);
let max=Math.max(...input)*2

let isPrime = new Array( max+1).fill(true);
isPrime[1] = false;
isPrime[2] = true;


for (let i = 2; i * i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

function sol(num) {
  let cnt = 0;

  for (let j = num + 1; j <= num * 2; j++) {
    if (isPrime[j]) {
      cnt++;
    }
  }

  return cnt;
}


let ans = input.map((v) => sol(v)).join("\n");
console.log(ans);
//** */
