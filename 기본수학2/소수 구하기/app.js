// //** */
// let fs=require("fs")
// let file=process.platform=="linux"?0:__dirname+"/input.txt"
// let input=fs.readFileSync(file,{encoding:"utf-8"}).trim().split(" ").map(Number)
// let [M,N]=input

// let arr=new Array(N-M+1).fill(0).map(v=>M++)

// function isPrime(num){
//     let primeNum=2
// if(num==1)return false;
// if(num==2)return true;
// while(true){
//     if(num%primeNum==0)return false
//     else{++primeNum}
//     if(primeNum>Math.sqrt(num)){return true};
// }
// }
// arr=arr.filter(v=>isPrime(v))
// let ans=arr.join("\n")
// console.log(ans)
// //** */

//**에라토스테네스의 체 */

let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs
  .readFileSync(file, { encoding: "utf-8" })
  .trim()
  .split(" ")
  .map(Number);
let [M, N] = input;


let isPrimeArr = new Array(N + 1).fill(true);
isPrimeArr[1] = false;
let sqrt = Math.sqrt(N);
for (let i = 2; i <= Math.ceil(sqrt); i++) {
  if ((isPrimeArr[i])) {
    let m = 2;
    while (m * i <= N) {
      isPrimeArr[m * i] = false;
      m++;
    }
  }
}
let ansArr = [];

for (let j = M; j <= N; j++) {
  if (isPrimeArr[j]) {
    ansArr.push(j);
  }
}
let ans = ansArr.join("\n");
console.log(ans);

//** */
