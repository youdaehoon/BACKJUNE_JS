// //**bigint 사용안함 코드길이 김,시간188ms */

// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = fs.readFileSync(file, { encoding: "utf-8" }).trim().split(" ");

// let [A, B] = input;
// let lastNumberA = "";
// let lastNumberB = "";
// let temp = 0;
// let ans = "";

// while (A.length > 0 || B.length > 0) {
//   lastNumberA = +A.slice(A.length - 1);
//   lastNumberB = +B.slice(B.length - 1);
//   // console.log(lastNumberA,lastNumberB)
//   A = A.slice(0, A.length - 1);
//   B = B.slice(0, B.length - 1);
//   temp = lastNumberA + lastNumberB + temp;
//   ans = (temp % 10) + ans;
//   temp = (temp - (temp % 10)) / 10;
// }

// temp == 0 ? console.log(ans) : console.log(temp + ans);
// //** */



//** bigint 사용 */

let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf-8" }).trim().split(" ");

let A=BigInt(input[0])
let B=BigInt(input[1])
let ans=String(A+B)
console.log(ans)

//** */