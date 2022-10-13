// //**time over */
// let fs = require("fs");
// let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
// let input = fs.readFileSync(file, { encoding: "utf8" }).split("\n");
//  input.shift();
// let obj={};
// input.forEach((v) => {
//   if (obj[v.split(" ")[0]]) {
//     obj[v.split(" ")[0]]+=" "+v.split(" ")[1]
//   }else{
//     obj[v.split(" ")[0]]=v.split(" ")[1]
//   }

// });
// let arr=[]
// for(let num in obj){
// obj[num].split(" ").sort((a,b)=>+a-b).map(v=>arr.push(num+" "+v))
// }
// let ans= arr.join("\n")
// console.log(ans)
// //** */

//** */
let fs = require("fs");
let file = process.platform == "linux" ? 0 : __dirname + "/input.txt";
let input = fs.readFileSync(file, { encoding: "utf8" }).trim().split("\n");
let len = input.shift();
input = input.map((v) => v.split(" ").map(Number)).sort((a, b) =>{
    if(a[0]==b[0]){
        return a[1]-b[1]
    }else return(a[0] - b[0])
} );

let ans = "";
for (num in input) {
  ans += input[num][0] + " " + input[num][1] + "\n";
}
console.log(ans);
