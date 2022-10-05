// //**리팩토링전 */
// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = +fs.readFileSync(file, { encoding: "utf-8" });
// let optimal = Math.floor(input / 5);
// let a, n;

// a = optimal;
// n = 0;

// while (a >= 0) {
//   while (5 * a + 3 * n < input) {
//     if (5 * a + 3 * n == input) break;
//     n++;
//   }
//   if (5 * a + 3 * n == input) break;
//   a--;
// }

// let ans=a<0?-1:a+n

// console.log(ans)
// //** */

//**리팩토링전 */
let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = +fs.readFileSync(file, { encoding: "utf-8" });
let optimal = Math.floor(input / 5);
let cnt=0



while (true) {
  if (input%5==0) {
    ans=cnt+input/5
    break;
  }
  input-=3
  cnt++
  if(input<0){
    ans=-1
    break;
  }
}


console.log(ans)
//** */