//** while 2번 병렬로 사용 */
let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs
  .readFileSync(file, { encoding: "utf-8" })
  .split("\n")
  .map(Number);
let [M, N] = input;
let sum = 0;
let min = M;
let cnt=0
while (M <= N) {
  if (isPrime(M)) sum += M;
  M++;
}
while (min <= N) {
  if (isPrime(min)) {
    cnt++
    break;
  }
  min++;
}
let ans
cnt==0?ans=-1:ans=sum+"\n"+min
console.log(ans);

function isPrime(n) {
  let temp = parseInt(n / 2);
  let isPrime = true;
  if (n === 1) return false;
  if (n === 2) return true;
  while (temp > 1) {
    if (n % temp === 0) {
      isPrime = false;
      break;
    }
    temp--;
  }

  return isPrime;
}
//** */

// //** while 2번 병렬로 사용 */
// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = fs
//   .readFileSync(file, { encoding: "utf-8" })
//   .split("\n")
//   .map(Number);

// let [M, N] = input;

// let arr = new Array(N - M + 1).fill(0).map((v) => {
//   v = M;
//   M++;
//   return v;
// });

// console.log(arr);

// function isPrime(n) {
//   let temp = parseInt(n / 2);
//   let isPrime = true;
//   if (n === 1) return false;
//   if (n === 2) return true;
//   while (temp > 1) {
//     if (n % temp === 0) {
//       isPrime = false;
//       break;
//     }
//     temp--;
//   }

//   return isPrime;
// }
// //** */
